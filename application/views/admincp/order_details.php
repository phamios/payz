<div class="row">
	<div class="col-sm-12">
		<?php if($orderdetails <> null):?>
			<?php foreach($orderdetails as $order):?>
		<h3 class="header smaller lighter red">Chi tiết đơn vay số: <?php echo $order->id?></h3>
		<a href="<?php echo site_url('');?>" class="btn btn-info"><i class="ace-icon fa fa-print  align-top bigger-125 icon-on-right"></i> In </a>
	 	<a href="<?php echo site_url('');?>" class="btn btn-lg btn-success"><i class="ace-icon fa fa-check"></i> Chấp nhận </a>
		<a href="<?php echo site_url('admincp/index');?>" class="btn"><i class="ace-icon fa fa-pencil align-top bigger-125"></i> Thoát</a>
		<hr/>
		<div class="well well-sm"><b>Tên:</b> <?php echo $order->fullname?></div>
		<div class="well well-sm"><b>Số CMTND/Hộ chiếu:</b> <?php echo $order->cmtnd?></div>
		<div class="well well-sm"><b>Điện thoại:</b> <?php echo $order->userphone?></div>
		<div class="well well-sm"><b>Số tiền vay:</b> <?php echo number_format($order->amount)?></div>
		<div class="well well-sm"><b>Thời gian vay:</b> <?php echo $order->renttime?></div>
		<div class="well well-sm"><b>Ngày đặt lệnh vay:</b> <?php echo $order->ordertime?></div>
		<div class="well well-sm"><b>Thời gian trả:</b> <?php echo $order->paytime?></div>
		<div class="well well-sm"><b>Tổng tiền phải trả:</b> <?php echo number_format($order->totalyamount)?></div>
		<div class="well well-sm"><b>Ngày sinh:</b> <?php echo $order->birthdate?></div>
		<div class="well well-sm"><b>Giới tính:</b> <?php echo $order->sex?></div>
		<div class="well well-sm"><b>Email:</b> <?php echo $order->email?></div>
		<div class="well well-sm"><b>Địa chỉ:</b> <?php echo $order->useraddress?></div>

		<!-- <div class="well">
			<h4 class="green smaller lighter">Tên</h4>

		</div>

		<div class="well well-lg">
			<h4 class="blue">Large Well</h4>
			Control padding and rounded corners with two optional modifier classes.
		</div> -->
		<a href="<?php echo site_url('');?>" class="btn btn-info"><i class="ace-icon fa fa-print  align-top bigger-125 icon-on-right"></i> In </a>
	 	<a href="<?php echo site_url('');?>" class="btn btn-lg btn-success"><i class="ace-icon fa fa-check"></i> Chấp nhận </a>
		<a href="<?php echo site_url('admincp/index');?>" class="btn"><i class="ace-icon fa fa-pencil align-top bigger-125"></i> Thoát</a>

		<?php endforeach;?>
		<?php endif;?>
	</div><!-- /.col -->
</div>
