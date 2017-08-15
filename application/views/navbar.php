<div class="navbar">
    <div class="wrapper_large">
        <div class="navbar__header">
            <button aria-expanded="false" class="navbar__toggle collapsed" data-target="@collapse" data-toggle="collapse" type="button"><span class="navbar__toggle__bar"></span><span class="navbar__toggle__bar"></span><span class="navbar__toggle__bar"></span>
            </button><a class="navbar__logo" href="<?php echo site_url();?>">PayZ</a>
        </div>
        <div class="navbar__collapse collapse" role="collapse">
            <ul class="navbar__nav navbar__nav-right">
                <li class="navbar__item navbar__item-active "><a href="<?php echo site_url();?>">Trang chủ</a>
                </li>
				<?php if($menus <> null):?>
					<?php foreach($menus as $menu):?>
						<li class="navbar__item false">
							<a href="<?php echo site_url('tin-tuc/'.  create_slug($menu->posttitle).'-'.$menu->id.'.html')?>"><?php echo $menu->posttitle?></a>
						</li>
					<?php endforeach;?>
				<?php endif;?>
                <!-- <li class="navbar__item false"><a href="<?php echo site_url('home/help/about');?>">Về PayZ</a>
                </li> -->
                <!-- <li class="navbar__item false"><a href="<?php echo site_url('home/login');?>">Tiến hành vay</a>
                </li>
                <li class="navbar__item false"><a href="<?php echo site_url('home/help/payment');?>">Thanh toán khoản vay</a>
                </li>
                <li class="navbar__item false"><a href="<?php echo site_url('home/help/contact');?>">Liên hệ</a>
                </li>
                <li class="navbar__item"><a href="<?php echo site_url('home/help/faq');?>">Câu hỏi thường gặp</a>
                </li> -->
                <div class="personal_account">
                    <div class="navbar_acc"><a href="<?php echo site_url('home/login');?>">Đăng ký Vay lại</a>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</div>
