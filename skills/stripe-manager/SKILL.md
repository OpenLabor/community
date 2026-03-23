---
name: Stripe Manager
description: "Manage customers, invoices, subscriptions, payments, and billing via Stripe Composio connector"
category: Finance
roles:
  - accountant
  - cmo
  - sdr
platforms:
  - stripe
---

<!-- openlabor-connector: stripe, api_key={{INTERNAL_API_KEY}}, employee={{EMPLOYEE_ID}}, base={{API_BASE_URL}} -->

# Stripe Manager

Manage customers, invoices, subscriptions, payments, and billing via Stripe.

You have access to Stripe through the OpenLabor connector API.

## How to Execute Stripe Actions

```
openlabor-exec stripe <TOOL_NAME> '<json_args>'
```

## Customers

### Create Customer
- Tool: `STRIPE_CREATE_CUSTOMER`
- Args: `{ "email": "customer@example.com", "name": "John Smith", "description": "Enterprise client" }`

### Search Customers
- Tool: `STRIPE_SEARCH_STRIPE_CUSTOMERS`
- Args: `{ "query": "email:'john@example.com'" }`

### List Customers
- Tool: `STRIPE_LIST_CUSTOMERS`
- Args: `{}`

### Get Customer Details
- Tool: `STRIPE_RETRIEVE_CUSTOMER`
- Args: `{ "customer_id": "cus_XXXXX" }`

### Update Customer
- Tool: `STRIPE_UPDATE_CUSTOMER`
- Args: `{ "customer_id": "cus_XXXXX", "name": "Updated Name", "metadata": { "plan": "enterprise" } }`

### Delete Customer
- Tool: `STRIPE_DELETE_CUSTOMER`
- Args: `{ "customer_id": "cus_XXXXX" }`
- Warning: permanently deletes customer and cancels all subscriptions

## Invoices

### Create Invoice
- Tool: `STRIPE_CREATE_INVOICE`
- Args: `{ "customer": "cus_XXXXX" }`
- Creates a draft invoice

### Add Line Items
- Tool: `STRIPE_CREATE_INVOICE_ITEM`
- Args: `{ "customer": "cus_XXXXX", "amount": 5000, "currency": "usd", "description": "Consulting — March 2026" }`
- Amount in cents (5000 = $50.00)

### List Invoices
- Tool: `STRIPE_LIST_INVOICES`
- Args: `{}`

### Get Invoice
- Tool: `STRIPE_RETRIEVE_INVOICE`
- Args: `{ "invoice_id": "in_XXXXX" }`

### Issue Credit Note
- Tool: `STRIPE_CREATE_CREDIT_NOTE`
- Args: `{ "invoice": "in_XXXXX" }`

## Subscriptions

### Create Subscription
- Tool: `STRIPE_CREATE_SUBSCRIPTION`
- Args: `{ "customer": "cus_XXXXX", "items": [{ "price": "price_XXXXX" }] }`
- Supports trial periods, coupons, metered billing

### List Subscriptions
- Tool: `STRIPE_LIST_SUBSCRIPTIONS`
- Args: `{}`

### Get Subscription
- Tool: `STRIPE_RETRIEVE_SUBSCRIPTION`
- Args: `{ "subscription_id": "sub_XXXXX" }`

### Update Subscription
- Tool: `STRIPE_UPDATE_SUBSCRIPTION`
- Args: `{ "subscription_id": "sub_XXXXX" }`

### Cancel Subscription
- Tool: `STRIPE_CANCEL_SUBSCRIPTION`
- Args: `{ "subscription_id": "sub_XXXXX" }`
- Cancels at end of current billing period

## Payments

### Create Payment Intent
- Tool: `STRIPE_CREATE_PAYMENT_INTENT`
- Args: `{ "amount": 10000, "currency": "usd", "customer": "cus_XXXXX" }`
- Amount in cents (10000 = $100.00)

### List Payments
- Tool: `STRIPE_LIST_PAYMENT_INTENTS`
- Args: `{}`

### Get Payment Details
- Tool: `STRIPE_RETRIEVE_PAYMENT_INTENT`
- Args: `{ "payment_intent_id": "pi_XXXXX" }`

### Issue Refund
- Tool: `STRIPE_CREATE_REFUND`
- Args: `{ "payment_intent": "pi_XXXXX" }`
- Full refund by default. For partial: add `"amount": 2500`

### List Refunds
- Tool: `STRIPE_LIST_REFUNDS`
- Args: `{}`

## Products & Prices

### Create Product
- Tool: `STRIPE_CREATE_PRODUCT`
- Args: `{ "name": "Pro Plan" }`

### List Products
- Tool: `STRIPE_LIST_PRODUCTS`
- Args: `{}`

### Create Price
- Tool: `STRIPE_CREATE_PRICE`
- Args: `{ "currency": "usd", "unit_amount": 2900, "recurring": { "interval": "month" }, "product": "prod_XXXXX" }`

## Checkout & Payment Links

### Create Checkout Session
- Tool: `STRIPE_CREATE_CHECKOUT_SESSION`
- Args: `{ "mode": "subscription", "line_items": [{ "price": "price_XXXXX", "quantity": 1 }], "success_url": "https://example.com/success" }`

### Create Payment Link
- Tool: `STRIPE_CREATE_PAYMENT_LINK`
- Args: `{ "line_items": [{ "price": "price_XXXXX", "quantity": 1 }] }`

### List Payment Links
- Tool: `STRIPE_LIST_PAYMENT_LINKS`
- Args: `{}`

## Balance & Coupons

### Check Balance
- Tool: `STRIPE_RETRIEVE_BALANCE`
- Args: `{}`

### Create Coupon
- Tool: `STRIPE_CREATE_COUPON`
- Args: `{ "duration": "once", "percent_off": 20 }`

### List Coupons
- Tool: `STRIPE_LIST_STRIPE_COUPONS`
- Args: `{}`

## Common Workflows

### Invoice a Client
1. Find or create customer: `STRIPE_SEARCH_STRIPE_CUSTOMERS` or `STRIPE_CREATE_CUSTOMER`
2. Create invoice: `STRIPE_CREATE_INVOICE`
3. Add line items: `STRIPE_CREATE_INVOICE_ITEM`
4. Stripe auto-finalizes and sends the invoice

### Set Up a Subscription
1. Ensure product + price exist: `STRIPE_CREATE_PRODUCT` → `STRIPE_CREATE_PRICE`
2. Create or find customer: `STRIPE_CREATE_CUSTOMER`
3. Create subscription: `STRIPE_CREATE_SUBSCRIPTION`

### Process a Refund
1. Find the payment: `STRIPE_LIST_PAYMENT_INTENTS` or `STRIPE_RETRIEVE_PAYMENT_INTENT`
2. Issue refund: `STRIPE_CREATE_REFUND`

### Generate a Payment Link
1. Ensure product + price exist
2. Create link: `STRIPE_CREATE_PAYMENT_LINK`
3. Share the link with the customer

## Guidelines
1. All amounts are in **cents** (e.g. $50.00 = 5000)
2. Always confirm with the user before creating charges, subscriptions, or deleting customers
3. Use `STRIPE_CREATE_PAYMENT_INTENT` instead of deprecated `STRIPE_CREATE_CHARGE`
4. If you get a 400 "not connected" error, tell the user to connect Stripe in the Apps tab
5. Never expose API keys or customer payment details to the user
6. Be extra careful with delete and refund operations — ask for confirmation
