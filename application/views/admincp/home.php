<div class="row">
    <div class="col-sm-12">
        <div class="widget-box transparent">
            <div class="widget-header widget-header-flat">
                <h4 class="widget-title lighter">
                    <i class="ace-icon fa fa-star orange"></i>
                    Thống kê giao dịch hiện tại
                </h4>
                <div class="widget-toolbar">
                    <a href="#" data-action="collapse">
                        <i class="ace-icon fa fa-chevron-up"></i>
                    </a>
                </div>
            </div>

            <div class="widget-body">
                <div class="widget-main no-padding">
                    <table class="table table-bordered table-striped">
                        <thead class="thin-border-bottom">
                            <tr>
								<th>
                                    <i class="ace-icon fa fa-caret-right blue"></i>ID
                                </th>
                                <th>
                                    <i class="ace-icon fa fa-caret-right blue"></i>Tên người vay
                                </th>

                                <th>
                                    <i class="ace-icon fa fa-caret-right blue"></i>Liên hệ
                                </th>

                                <th>
                                    <i class="ace-icon fa fa-caret-right blue"></i>Số lượng vay
                                </th>

                                <th class="hidden-480">
                                    <i class="ace-icon fa fa-caret-right blue"></i>Thời gian vay
                                </th>
                            </tr>
                        </thead>

                        <tbody>
							<?php if($listorders <> null):?>
								<?php foreach($listorders as $order):?>
	                            <tr>
									 <td><a href="<?php echo site_url('admincp/order_details/'.$order->id);?>">Chi tiết</a></td>
	                                <td><a href="<?php echo site_url('admincp/order_details/'.$order->id);?>"><?php echo $order->fullname?></a></td>
	                                <td><?php echo $order->userphone?></td>
	                               <td>
	                                    <b class="blue"><?php echo number_format($order->amount);?> vnđ</b>
	                                </td>

	                                <td class="hidden-480">
	                                    <span class="label label-info arrowed-right arrowed-in"><?php echo $order->renttime;?></span>
	                                </td>
	                            </tr>
							<?php endforeach;?>
 						<?php endif;?>
                        </tbody>
                    </table>
                </div><!-- /.widget-main -->
            </div><!-- /.widget-body -->
        </div><!-- /.widget-box -->
    </div><!-- /.col -->


</div><!-- /.row -->
