   /**-----scroll add class fn----- */
   $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
        $(".navbar_top").addClass("scroll");
    } else {
        $(".navbar_top").removeClass("scroll");
    }
});
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".cost_list_overall").addClass("list");
    } else {
        $(".cost_list_overall").removeClass("list");
    }
});

/**-----------painting tabs------------------ */
function tabfn(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
/**------owl carosel------- */
$(document).ready(function() {
    $(".owl-carousel").owlCarousel();

    $('#profile_slide').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 2,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
    $('#gallery').owlCarousel({
        loop:true,
        margin:10,
        items: 4,
        autoplay: true,
        center:true,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});
/**-------menu ------------ */
function menuToggle() {
    var element = document.getElementById("nav_bar");
    element.classList.toggle("menu");
}


/**------owl carosel------- */
$(document).ready(function() {
    var $filterCheckboxes = $('input.price-filter');
    
    console.log($filterCheckboxes);
    

    // Read All Available Filter Groups
    var allFilters = [];
    $filterCheckboxes.each(function() {
        if ($.inArray(this.name,allFilters) == -1){
          allFilters.push(this.name);
      }  
    });

  $filterCheckboxes.on('change', function() {
  
    // create a collection containing all of the filterable elements
    var $filteredResults = $('.paint-items');
  
      var $filterCategoryApplied = 0;
    
    $.each(allFilters, function(arIndex, filterName) {
      var $filterCheckboxCategory = $('input[name='+filterName+']').filter(':checked');
           
     if ( $filterCheckboxCategory.length === 0 ) {
      $filteredResults = [];
     }
    });
  
      // Read Selectetd Filters
    var selectedFilters = {};
    $filterCheckboxes.filter(':checked').each(function() {
      if (!selectedFilters.hasOwnProperty(this.name)) {
        selectedFilters[this.name] = [];
      }
      selectedFilters[this.name].push(this.value);
    });
    
  
    // loop over the selected filter name -> (array) values pairs
    $.each(selectedFilters, function(name, filterValues) {

      // filter each .flower element
      $filteredResults = $filteredResults.filter(function() {
  
        var matched = false,
          currentFilterValues = $(this).data('category').split(' ');
  
        // loop over each category value in the current .flower's data-category
        $.each(currentFilterValues, function(_, currentFilterValue) {
          if ($.inArray(currentFilterValue, filterValues) != -1) {
            matched = true;
            return false;
          }
        });
        return matched;
  
      });
    });
  
    $('.paint-items').hide().filter($filteredResults).show();
  
  });
  
});