<?php
ini_set('display_errors',0);
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

    var $upload_dir = "./files/products/";

    function __construct() {
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('url');
        $this->load->helper(array('form', 'url'));
        session_start();
		$this->load->model('post_model');
		$this->load->helper('slug');
    }

    public function index() {
		$data['menus'] = $this->post_model->listmenupost();
        $this->load->view('home',$data);
    }

	public function post($idpost= null){
		$tmp = explode('-', $idpost);
	    $id = end($tmp);
	    $getID = explode('.', $id);
		$data['menus'] = $this->post_model->listmenupost();
		$data['contents'] = $this->post_model->getdetails($getID[0]);
		$this->load->view('home',$data);
	}

    public function rentsubmit(){
        if(isset($_REQUEST['commit'])){
            $amount = $this->input->post('application[amount]',true);
            $rentday  = $this->input->post('application[term]',true);
            $duedate  = $this->input->post('duedateupdate',true);
            $totalpay = 0;
            switch ($rentday) {
               case 10:
                    $totalpay = $amount + ($amount*20)/100;
                    break;
                case 20:
                    $totalpay = $amount + ($amount*30)/100;
                    break;
                case 30:
                    $totalpay = $amount + ($amount*40)/100;
                    break;
            }
            $fullname = $this->input->post('application[full_name]',true);
            $phone = $this->input->post('application[mobile_phone]',true);
            $this->load->model('user_model');
            $id = $this->user_model->insertRent(str_replace(' ', '', $phone),$amount,$rentday,$duedate,$totalpay,$fullname);
            if($id <> 0) {
				$session_user = array(
					'renter_id' => $id,
				);
				$this->session->set_userdata($session_user);
                redirect('home/updateinfo/'.$id.'-'.md5($id));
            } else {
                ?>
                <script type="text/javascript">
                    alert("Người dùng đã tồn tại !");
                </script>
                <?php
                redirect('home/login');
            }
        } else {
            redirect('home/login');
        }
    }

	public function updateinfo($token=null){
			$id = explode('-', $token);
			if($id[1] == md5($id[0])){
				if(isset($_REQUEST['finishCommit'])){
					$cmt= $this->input->post('application[personalnumber]',true);
					$city = $this->input->post('personalcity',true);
					$strees = $this->input->post('application[living_street]',true);
					$numberhouse = $this->input->post('application[living_house_number]',true);
					$canho = $this->input->post('application[living_apartment_number]',true);
					$birthdate = $this->input->post('birthdayuser',true);
					$sex = $this->input->post('sex',true);
					$email = $this->input->post('email',true);

					$useraddress = $canho.', '.$numberhouse.', '.$strees.', '.$city;
					$this->load->model('user_model');
					$this->user_model->updateOrder($id[0],$cmt,$birthdate,$sex,$email,$useraddress);
					redirect("home/index");
				}
				$data['menus'] = $this->post_model->listmenupost();
				$data['token'] = $token;
		        $this->load->view('home',$data);
			} else {

				redirect('home/index/false/'.md5(date("d-m-Y h:m:s")).''.md5($token).md5(md5(date("d-m-Y h:m:s")).''.md5($token)));
			}
	}


    public function login(){
		$data['menus'] = $this->post_model->listmenupost();
        $this->load->view('home',$data);
    }




}
