<div class="wrapper">
	<div class="static_page">
		<?php if($contents <> null):?>
			<?php foreach($contents as $content):?>
				<h1><?php echo $content->posttitle?></h1>
				<p><?php echo $content->postdes?></p>
				<p><?php echo $content->postcontent?></p>
				<p><small>Ngày đăng: <?php echo $content->createdate;?></small></p>
			<?php endforeach;?>
		<?php endif;?>
	</div>
</div>
