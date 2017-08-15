<?php

ini_set('display_errors', 0);
defined('BASEPATH') OR exit('No direct script access allowed');

class Admincp extends CI_Controller {

    var $upload_dir = "./files/products/";

    function __construct() {
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('url');
        $this->load->helper(array('form', 'url'));
        session_start();
    }

    public function index() {
        if ($this->session->userdata('user_id') == null) {
            redirect('admincp/login');
        } else {
            $this->load->view('admincp/main');
        }
    }

    public function login() {
        if ($this->session->userdata('user_id') == null) {
            if (isset($_REQUEST['loginsubmit'])) {
                $name = $this->input->post('username', true);
                $pass = $this->input->post('userpass', true);
                $this->load->model('admin_model');
                $result = $this->admin_model->authenlogin($name, $pass);
                if ($result <> 0) {
                    $session_user = array(
                        'user_id' => $result,
                        'user_name' => $username
                    );
                    $this->session->set_userdata($session_user);
                    redirect('admincp/index');
                }
            }
            $this->load->view('admincp/login');
        } else {
            redirect('admincp/index');
        }
    }

    public function listpost(){
        if ($this->session->userdata('user_id') == null) {
            redirect('admincp/login');
        }else{
			$this->load->model('post_model');
			$data['allpost'] = $this->post_model->listallpost();
            $this->load->view('admincp/main',$data);
        }
    }

    public function addpost(){
        if ($this->session->userdata('user_id') == null) {
            redirect('admincp/login');
        }else{
			if(isset($_REQUEST['postsubmit'])){
				$type = $this->input->post('posttype',true);
				$title= $this->input->post('posttitle',true);
				$des= $this->input->post('postdes',true);
				$content= $this->input->post('postcontent',true);
				$this->load->model('post_model');
				$menu = 0;
				$result = $this->post_model->insertPost($type,$title,$des,$content,$menu);
				if($result <> 0 ){
					redirect('admincp/listpost');
				}
			}
             $this->load->view('admincp/main');
        }
    }

	public function deletepost($id=null){
		if ($this->session->userdata('user_id') == null) {
            redirect('admincp/login');
        }else{
			$this->load->model('post_model');
			$this->post_model->delpost($id);
			redirect('admincp/listpost');
		}

	}

    public function detailrent($rentid = null){
        if ($this->session->userdata('user_id') == null) {
            redirect('admincp/login');
        }else{
            $this->load->view('admincp/main');
        }
    }


     public function logout(){
        $this->session->unset_userdata('user_id');
        $this->session->unset_userdata('user_name');
        redirect('admincp/login');
    }

}
