<div class="step_page wrapper">
            <div class="row">
                <div class="col-md-12">
<?php echo form_open_multipart('home/updateinfo/'.$token, array('role' => "form", 'class' => 'simple_form form_float')); ?>
<h1 class="step_page__title">Thông tin cá nhân (nơi bạn đang sinh sống)</h1>
<div class="row">
    <div class="col-md-12">
        <div class="form__group select required application_living_city_id">

			<div class="form__group string required application_living_street">
				<label class="string required form__label" for="application_living_street"><abbr title="required">*</abbr> Số Chứng minh thư / Hộ chiếu của bạn</label>
				<input class="string required form__input input-lg" type="text" name="application[personalnumber]" id="application_personalnumber" />
			</div>

			<div class="form__group string required application_living_street">
				<label class="string required form__label" for="application_living_street"><abbr title="required">*</abbr> Email</label>
				<input class="string required form__input input-lg" type="text" placeholder="tranvannam@gmail.com" name="email" id="application_personalnumber" />
			</div>

			<div class="form__group string required application_living_street">
				<label class="string required form__label" for="application_living_street"><abbr title="required">*</abbr> Ngày tháng năm sinh</label>
				<input class="string required form__input input-lg" placeholder="30/10/1990" type="text" name="birthdayuser" id="application_personalnumber" />
			</div>

			<div class="form__group string required application_living_street">
				<label class="string required form__label" for="application_living_street"><abbr title="required">*</abbr> Giới tính</label>
				<select name="sex" class="select required form__input input-lg" >
						<option value="Nam"> Nam </option>
						<option value="Nữ"> Nữ </option>
				</select>
			</div>

			<label class="select required form__label" for="application_living_city_id"><abbr title="required">*</abbr> Tỉnh/Thành</label>
            <select name="personalcity" role="livingCity select2" hint=" " data="{:placeholder=&gt;&quot;Vui lòng chọn…&quot;} {:placeholder=&gt;false}" class="select required form__input input-lg"   id="application_living_city_id">

                <option value="">Vui lòng chọn…</option>
                <option value="50">Hồ Chí Minh</option>
                <option value="32">Đà Nẵng</option>
                <option value="59">Cần Thơ</option>
                <option value="1">Hà Nội</option>
                <option value="18">Tỉnh Bắc Ninh</option>
                <option value="19">Tỉnh Hải Dương</option>
                <option value="27">Tỉnh Nghệ An</option>
                <option value="35">Tỉnh Bình Định</option>
                <option value="37">Tỉnh Khánh Hòa</option>
                <option value="39">Tỉnh Bình Thuận</option>
                <option value="46">Tỉnh Tây Ninh</option>
                <option value="47">Tỉnh Bình Dương</option>
                <option value="48">Tỉnh Đồng Nai</option>
                <option value="49">Tỉnh Bà Rịa - Vũng Tàu</option>
                <option value="51">Tỉnh Long An</option>
                <option value="52">Tỉnh Tiền Giang</option>
                <option value="53">Tỉnh Bến Tre</option>
                <option value="54">Tỉnh Trà Vinh</option>
                <option value="55">Tỉnh Vĩnh Long</option>
                <option value="56">Tỉnh Đồng Tháp</option>
                <option value="57">Tỉnh An Giang</option>
                <option value="58">Tỉnh Kiên Giang</option>
                <option value="63">Tỉnh Cà Mau</option>
                <option value="">
                    <option disabled='true'>----------</option>
                </option>
                <option value="2">Tỉnh Hà Giang</option>
                <option value="3">Tỉnh Cao Bằng</option>
                <option value="4">Tỉnh Bắc Kạn</option>
                <option value="5">Tỉnh Tuyên Quang</option>
                <option value="6">Tỉnh Lào Cai</option>
                <option value="7">Tỉnh Điện Biên</option>
                <option value="8">Tỉnh Lai Châu</option>
                <option value="9">Tỉnh Sơn La</option>
                <option value="10">Tỉnh Yên Bái</option>
                <option value="11">Tỉnh Hoà Bình</option>
                <option value="12">Tỉnh Thái Nguyên</option>
                <option value="13">Tỉnh Lạng Sơn</option>
                <option value="14">Tỉnh Quảng Ninh</option>
                <option value="15">Tỉnh Bắc Giang</option>
                <option value="16">Tỉnh Phú Thọ</option>
                <option value="17">Tỉnh Vĩnh Phúc</option>
                <option value="20">Hải Phòng</option>
                <option value="21">Tỉnh Hưng Yên</option>
                <option value="22">Tỉnh Thái Bình</option>
                <option value="23">Tỉnh Hà Nam</option>
                <option value="24">Tỉnh Nam Định</option>
                <option value="25">Tỉnh Ninh Bình</option>
                <option value="26">Tỉnh Thanh Hóa</option>
                <option value="28">Tỉnh Hà Tĩnh</option>
                <option value="29">Tỉnh Quảng Bình</option>
                <option value="30">Tỉnh Quảng Trị</option>
                <option value="31">Tỉnh Thừa Thiên Huế</option>
                <option value="33">Tỉnh Quảng Nam</option>
                <option value="34">Tỉnh Quảng Ngãi</option>
                <option value="36">Tỉnh Phú Yên</option>
                <option value="38">Tỉnh Ninh Thuận</option>
                <option value="40">Tỉnh Kon Tum</option>
                <option value="41">Tỉnh Gia Lai</option>
                <option value="42">Tỉnh Đắk Lắk</option>
                <option value="43">Tỉnh Đắk Nông</option>
                <option value="44">Tỉnh Lâm Đồng</option>
                <option value="45">Tỉnh Bình Phước</option>
                <option value="60">Tỉnh Hậu Giang</option>
                <option value="61">Tỉnh Sóc Trăng</option>
                <option value="62">Tỉnh Bạc Liêu</option>
            </select>
        </div>


        <div class="form__group string required application_living_street">
            <label class="string required form__label" for="application_living_street"><abbr title="required">*</abbr> Đường</label>
            <input class="string required form__input input-lg" type="text" name="application[living_street]" id="application_living_street" />
        </div>
        <div class="form__group string required application_living_house_number">
            <label class="string required form__label" for="application_living_house_number"><abbr title="required">*</abbr> Số nhà</label>
            <input class="string required form__input input-lg" type="text" name="application[living_house_number]" id="application_living_house_number" />
        </div>
        <div class="form__group string optional application_living_apartment_number">
            <label class="string optional form__label" for="application_living_apartment_number">Căn hộ/Phòng</label>
            <input class="string optional form__input input-lg" type="text" name="application[living_apartment_number]" id="application_living_apartment_number" />
        </div>

		<a class="btn btn-lg btn-back btn-link" href="#">
			<i class="fa fa-arrow-left"></i> Quay lại chỉnh sửa thông tin cá nhân</a>

		 <input type="submit" name="finishCommit" id="finishCommit" value="Hoàn tất" class="btn btn-primary btn btn-block btn-success-outline btn-lg" />


    </div>
</div>
<?php echo form_close(); ?>
</div>
</div>
</div>
