jQuery(document).ready(function($) {
    $('#replace_title_submit').on('click', function() {
        var search_text = $('#search_text').val();
        var replace_text = $('#replace_text').val();

        $.ajax({
            type: 'POST',
            url: replace_title_params.ajax_url,
            data: {
                action: 'replace_title',
                nonce: replace_title_params.replace_nonce,
                search_text: search_text,
                replace_text: replace_text,
            },
            success: function(response) {
                if (response.success) {
                    alert(response.data);
                } else {
                    console.log(response.data); // 输出详细错误信息
                }
            },
            error: function(error) {
                console.log(error.responseText); // 输出详细错误信息
            }
        });
    });
});
