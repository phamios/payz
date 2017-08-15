<div class="wrapper_large" id="hero">
    <div class="hero_widget__body">
        <div class="row">
            <?php echo form_open_multipart('home/login', array('role' => "form", 'class' => 'simple_form form_float')); ?>
            <div class="col-xs-12 col-md-9">
                <div class="col-xs-12 col-md-7">
                    <div class="hero_widget__calculation">
                        <div class="hero_widget__sliders">
                            <div class="sliders sliders-top">
                                <ul>
                                    <li>Đăng nhập hệ thống với số điện thoại bạn đã đăng ký vay</li>
                                    <li>Vay tiền nhanh chóng chỉ sau vài giờ đồng hồ trong ngày</li>
                                </ul>
                            </div>
                            <div class="credit_limitation" role="creditLimitation"></div>
                            <div class="sliders">
                                &nbsp;
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
                            <input type="submit" id="commitlogin"  name="commitlogin" value="Đăng nhập" class="btn btn-primary btn btn-primary btn-lg btn-block btn-calc btn-mob" role="takeMoneyMain" data-disable-with="Xin vui lòng chờ">
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-12">
                    &nbsp;
                </div>
            </div>
            <?php echo form_close(); ?>
            
        </div>
    </div>
    
</div>
 