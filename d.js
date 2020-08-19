$(function() {
    $('#table').bootstrapTable({
        // data: data,

        formatSearch: function () {
            return 'Search all fields'
        }
    })
  })

  $(document).ready(function () {
    $(document).on('th', '.number-separator', function (e) {
      if (/^[0-9.,]+$/.test($(this).val())) {
        $(this).val(
          parseFloat($(this).val().replace(/,/g, '')).toLocaleString('en')
        );
      } else {
        $(this).val(
          $(this)
            .val()
            .substring(0, $(this).val().length - 1)
        );
      }
    });
  });
  

//   $(document).ready(function () {

//     (function ($) {

//         $('#filter').keyup(function () {

//             var rex = new RegExp($(this).val(), 'i');
//             $('.searchable tr').hide();
//             $('.searchable tr').filter(function () {
//                 return rex.test($(this).text());
//             }).show();

//         })

//     }(jQuery));

// });

  

// $(function () {
//     $('#table').bootstrapTable({
//         // showFilter: true,
//         // search: true,
//         data: data
//     });
// });