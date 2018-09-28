<!--START TALKABLE JAVASCRIPT -->
<script>
    var _talkable_data = {
        purchase: {
            order_number: '%%ORDER_ID%%', // Unique order number. Example: '100011'
            subtotal: '%%ORDER_SUBTOTAL%%', // Order subtotal (pre-tax, post-discount). Example: '23.97'
            coupon_code: '' // Coupon code that was used at checkout (pass multiple as an array). Example: 'SAVE20'
        },

        customer: {
            email: '%%GLOBAL_BillingEmail%%'
        }
    };
window._talkableq.push(['register_purchase', _talkable_data]); 
</script>
<!-- END TALKABLE JAVASCRIPT -->