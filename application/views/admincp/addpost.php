<div class="row">
    <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
       <?php echo form_open_multipart('admincp/addpost', array('role' => "form", 'class' => 'simple_form form_float')); ?>

<br/>
            <div class="form-group">
                <label class="col-sm-3 control-label no-padding-right" for="form-field-1"> Loại bài post</label>

                <div class="col-sm-9">
                     <select class="form-control" name="posttype" id="form-field-select-1">
                         <option value="1">Menu</option>
                         <option selected value="2">Tin tức</option>
                         <option value="3">Nội dung</option>
                     </select>
                </div>
            </div>
<br/>
            <div class="form-group">
                <label class="col-sm-3 control-label no-padding-right" for="form-field-1-1"> Tiêu đề </label>

                <div class="col-sm-9">
                    <input type="text" id="form-field-1-1" name="posttitle" placeholder="Text Field" class="form-control" />
                </div>
            </div>

            <div class="space-4"></div>

<br/>

            <div class="form-group">
                <label class="col-sm-3 control-label no-padding-right" for="form-field-2"> Giới thiệu </label>

                <div class="col-sm-9">
                    <textarea class="form-control" id="form-field-8"  name="postdes" placeholder="Default Text"></textarea>
                </div>
            </div>
<br/>
            <div class="form-group">
                <label class="col-sm-3 control-label no-padding-right" for="form-field-2"> Nội dung </label>

                <div class="col-sm-9">
                    <textarea class="form-control" id="form-field-8" name="postcontent" placeholder="Default Text"></textarea>
                </div>
            </div>
<br/>

            <div class="space-4"></div>
<br/>
		<div class="form-group">
            <div class="clearfix form-actions">
                <div class="col-md-offset-3 col-md-9">
					<br/>
					<input type="submit" name="postsubmit"  class="btn btn-info"  value="Thêm mới"/>

                    &nbsp; &nbsp; &nbsp;
                 <input type="submit" name="postreset"  class="btn btn-info"  value="Huỷ"/>
                </div>
            </div>
		</div>

        <?php echo form_close(); ?>



    </div>
</div>
