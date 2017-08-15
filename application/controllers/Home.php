<?php
ini_set('display_errors', 0);
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
                redirect('home/updateinfo'.md5($id));
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


    public function login(){
        $this->load->view('home');
    }




}
