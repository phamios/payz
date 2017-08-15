<div class="row">
    <div class="col-xs-12">
        <table id="simple-table" class="table  table-bordered table-hover">
            <thead>
                <tr>

                    <th class="detail-col">Loại</th>
                    <th>Tiêu đề</th>
                    <th>Giới thiệu</th>

                    <th>
                        <i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i>
                        Ngày đăng
                    </th>
					<th>
						Hiển thị menu
					</th>
                    <th class="hidden-480">Status</th>

                    <th>Cấu hình</th>
                </tr>
            </thead>

            <tbody>
				<?php if($allpost <> null):?>
					<?php foreach($allpost as $post):?>
                <tr>

                    <td class="center">
                        <div class="action-buttons">
                            <?php $type="";
								switch($post->posttype){
									case 1:
										$type="Menu";
										break;
									case 2:
										$type="Tin tức";
										break;
									case 3:
										$type="Nội dung";
										break;
									};

							   echo $type;
							?>

                        </div>
                    </td>

                    <td>
                        <a href="#"><?php echo $post->posttitle?></a>
                    </td>
                    <td><?php echo $post->postdes?></td>
                    <td class="hidden-480"><?php echo $post->createdate?></td>
                    <td><?php echo $post->showmenu?></td>

                    <td class="hidden-480">
                        <span class="label label-sm label-warning"><?php echo $post->status?></span>
                    </td>

                    <td>
                        <div class="hidden-sm hidden-xs btn-group">
                            <!-- <button class="btn btn-xs btn-success">
                                <i class="ace-icon fa fa-check bigger-120"></i>
                            </button>

                            <button class="btn btn-xs btn-info">
                                <i class="ace-icon fa fa-pencil bigger-120"></i>
                            </button> -->
							<a href="<?php echo site_url('admincp/deletepost/'.$post->id);?>" class="btn btn-xs btn-danger">
								<i class="ace-icon fa fa-trash-o bigger-120"></i>
							</a>


                            <!-- <button class="btn btn-xs btn-warning">
                                <i class="ace-icon fa fa-flag bigger-120"></i>
                            </button> -->
                        </div>


                    </td>
                </tr>
				<?php endforeach;?>
			<?php endif;?>

            </tbody>
        </table>
    </div><!-- /.span -->
</div>
