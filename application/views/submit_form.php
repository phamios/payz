<div class="wrapper_large" id="hero">

    <input name="utf8" type="hidden" value="✓">
    <div class="hero_widget__title">Giải pháp tài chính trong vòng 24 giờ</div>
    <div class="hero_widget__body">
        <div class="row">
            <?php echo form_open_multipart('home/rentsubmit', array('role' => "form", 'class' => 'simple_form form_float')); ?>
            <div class="col-xs-12 col-md-9">
                <div class="col-xs-12 col-md-7">
                    <div class="hero_widget__calculation">
                        <div class="hero_widget__sliders">
                            <div class="sliders sliders-top">
                                <a class="sliders__minus" role="sliderAmountMinus" href="#">–</a>
                                <a class="sliders__plus" role="sliderAmountPlus" href="#">+</a>
                                <span class="sliders__title">Tôi cần vay
                                    <strong class="sliders__value" role="needAmount">2.000.000 </strong>VND</span>
                                <input role="amountSlider" data-slider-value="2000000" data-min="0" data-max="100" type="hidden" value="2000000" name="application[amount]" id="application_amount" style="display: none;" data-value="2000000">
                                <input role="amountSliderMove" type="hidden" name="application[credit_limit_slider_move]" id="application_credit_limit_slider_move">
                                <input role="amountSliderMoveToRepeat" type="hidden" name="application[credit_limit_slider_move_to_repeat]" id="application_credit_limit_slider_move_to_repeat">
                            </div>
                            <div class="credit_limitation" role="creditLimitation"></div>
                            <div class="sliders">
                                <a class="sliders__minus" role="sliderTermMinus" href="#">–</a>
                                <a class="sliders__plus" role="sliderTermPlus" href="#">+</a>
                                <span class="sliders__title">trong <strong class="sliders__value" role="forTerms">30</strong> ngày</span>
                                <input role="termSlider" data-slider-value="30" type="hidden" value="30" name="application[term]" id="application_term" onchange="getValueDueDate()" style="display: none;" data-value="30">
                                <input role="termSliderMove" type="hidden" name="application[credit_term_slider_move]" id="application_credit_term_slider_move">
                                <input type="hidden" id="duedateupdate" name="duedateupdate" value="0"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-5">
                    <div class="hero_widget__form">
                        <div role="formFloatGroup" class="form_float__group hidden application_ga_client_id">
                            <input class="hidden form_float__input" type="hidden" name="application[ga_client_id]" id="application_ga_client_id">
                        </div>
                        <div role="formFloatGroup" class="form_float__group form_float__input_wrapper string required application_full_name" aria-required="true">
                            <input class="string required form_float__input" placeholder="Nguyễn Thu Giang" type="text" name="application[full_name]" id="application_full_name" aria-required="true">
                            <label class="string required form_float__label" for="application_full_name" aria-required="true"><abbr title="required">*</abbr> Họ và tên</label>
                        </div>
                        <div role="formFloatGroup" class="form_float__group form_float__input_wrapper tel optional application_mobile_phone">
                            <input role="phone" class="string tel optional form_float__input" placeholder="0 123 456 78 90" type="tel" name="application[mobile_phone]" id="application_mobile_phone">
                            <label class="tel optional form_float__label" for="application_mobile_phone">Số điện thoại đang sử dụng</label>
                        </div>
                        <div class="form_float__btn">
                            <input type="submit" id="commit"  name="commit" value="VAY NGAY" class="btn btn-primary btn btn-primary btn-lg btn-block btn-calc btn-mob" role="takeMoneyMain" data-disable-with="Xin vui lòng chờ">
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-12">
                    <div class="hero_widget__calc">
                        <div class="hero_widget__calc__item">
                            <div class="hero_widget__calc__item__name">Khoản vay</div>
                            <div class="hero_widget__calc__item__value"><span role="calcAmount" id="calcAmount">2.000.000 </span>VND </div>
                        </div>
                        <div class="hero_widget__calc__item">
                            <div class="hero_widget__calc__item__name">Ngày thanh toán</div>
                            <div class="hero_widget__calc__item__value"><span role="paymentDueDateLabel" id="paymentDueDateLabel">20.09.2017</span>
                            </div>
                        </div>
                        <div class="hero_widget__calc__item" role="totalValue">
                            <div class="hero_widget__calc__item__name">Tổng số tiền thanh toán</div>
                            <div class="hero_widget__calc__item__value"><span role="calcTotal" id="calcTotal">2.780.000 </span>VND </div>
                        </div>
                    </div>
                </div>
            </div>
            <?php echo form_close(); ?>
            <div class="col-xs-12 col-md-3">
                <div class="hero_baner">
                    <div class="hero_baner__wrapper">
                        <div class="hero_baner__content">
                            <div class="hero_baner__title">Vay số tiền lớn hơn</div>
                            <div class="hero_baner__subtitle">nếu bạn đã là khách hàng!</div>
                            <p class="hero_baner__desc">Chỉ cần nhấn "Đăng ký Vay lại" và</p>
                            <p class="hero_baner__desc">làm theo hướng dẫn. Hồ sơ của bạn sẽ được duyệt ngay!</p>
                        </div>
                    </div>
                    <a data-modal="false" class="hero_baner__btn" role="bannerMain" data-remote="true" href="#">Đăng ký Vay lại</a>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8">
            <div class="hero_widget__loans">Khách hàng đã đăng ký
                <div class="hero_widget__loans_counter">
                    <span class="counter">7</span>
                    <span class="counter">8</span>
                    <span class="counter">3</span>
                    <span class="counter">4</span>
                    <span class="counter">5</span>
                    <span class="counter">1</span>
                </div>
            </div>
        </div>
    </div>

</div>

<script>
    function getValueDueDate(){
    $duedate = document.getElementById('paymentDueDateLabel').innerHTML;
//    duedateupdate
    document.getElementById('duedateupdate').value = $duedate;
    console.log($duedate);
}
</script>

<!--<script>
    $(function () {
        $("commit").on("click", function () {
            $amount = document.getElementById('calcAmount').innerHTML;
            $duedate = document.getElementById('paymentDueDateLabel').innerHTML;
            $totalpay = document.getElementById('calcTotal').innerHTML;
            var postData = ['amount'=>$amount,'duedate'=>$duedate,'totapay'=>$totalpay];
            alert(postData);
            $.ajax({
                    type: "POST",
                    url: "<?php echo site_url('home/rentsubmit');?>",
                    data: postData,
                    async: false,
                    success: function(data){
                       console.log('success');
                    }
             });


        });
    });
</script>-->
