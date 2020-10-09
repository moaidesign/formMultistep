$j = jQuery.noConflict();

/**
 * Move into form steps
 * @param Int
 */
function goToStep(stepNumber){
  $j('.step').each(function(i, obj) {
      if($j(obj).hasClass('current-step')){
        $j(obj).removeClass('current-step').addClass('inactive-step');
      }
  });
  $j('.step-' + stepNumber).addClass('current-step');
  if(stepNumber == 5){
    shippingRecap();
  }
}

/**
 * Set box conformity
 * @param String
 */
function setBoxConformity(value){
  $j('input[name="box-conformity"]').val(value);
}

/**
 * Set shipping assurance
 * @param String
 */
function setBoxAssurance(value){
  $j('input[name="box-assurance"]').val(value);
}

/**
 * Get shipping recap
 */
function shippingRecap(){
  var conformity;
  $j('input[name="box-conformity"]').val() == 'regular' ? conformity = 'regolare' : conformity = 'irregolare';
  $j('input[name="box-assurance"]').val() == 'regular' ? conformity = 'regolare' : conformity = 'irregolare';
  $j('.recap-dep-cap').text($j('input[name="dep-cap"]').val());
  $j('.recap-arr-cap').text($j('input[name="arr-cap"]').val());
  $j('.recap-dimension').text($j('input[name="height"]').val() + 'x' + $j('input[name="width"]').val() + 'x' + $j('input[name="deepth"]').val());
  $j('.recap-weight').text($j('input[name="height"]').val());
  $j('.recap-conformity').text(conformity);
  $j('.recap-assurance').text($j('input[name="box-assurance"]').val());
}
