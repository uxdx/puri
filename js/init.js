(function($) {
    $(function() {

        $('.sidenav').sidenav();
        $('.dropdown-trigger').dropdown();
        $(document).ready(function() {
            $('.fixed-action-btn').floatingActionButton();
        });
        $('.fixed-action-btn').floatingActionButton({
            toolbarEnabled: true
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space