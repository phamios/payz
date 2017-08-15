<?php
/**
 * Created by PhpStorm.
 * User: Javelin
 * Date: 8/2/2016
 * Time: 1:42 PM
 */
date_default_timezone_set('Asia/Bangkok');
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class User_model extends CI_Model {

    var $db_userorder = "tbl_orders";
	var $db_userinfo = "tbl_users";

    function __construct() {
        parent::__construct();
        $this->load->database();
    }

	public function listorder(){
		$this->db->order_by('id', "asc");
        $query = $this->db->get($this->db_userorder);
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return 0;
        }
	}

	public function details($id=null){
		$this->db->where('id', $id);
        $query = $this->db->get($this->db_userorder);
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return 0;
        }
	}

    public function insertRent($phone,$amount,$rentday,$duedate,$totalpay,$fullname){
        if($this->checkexitphone($phone) <> 1){
            $data = array(
                'userphone'=>$phone,
                'amount'=>$amount,
                'renttime'=>$rentday,
                'ordertime'=>date("d-m-Y h:m:s"),
                'paytime'=>$duedate,
                'totalyamount'=>$totalpay,
                'fullname'=>$fullname,
                'status'=>1,
                );
            $this->db->insert($this->db_userorder,$data);
            $id = $this->db->insert_id();
            $this->db->trans_complete();
			return $id;
        } else {
            return 0;
        }
    }

	public function updateOrder($id,$number,$birthdate,$sex,$email,$useraddress){

		$data = array(
			'cmtnd'=>$number,
			'birthdate'=>$birthdate,
			'sex'=>$sex,
			'email'=>$email,
			'useraddress'=>$useraddress
		);
		$this->db->where('id',$id);
		$this->db->update($this->db_userorder,$data);
		return 1;
	}

	public function insertUser($phone,$number,$email,$fullname){
		if($this->checkexitphone($phone) <> 1){
			$data = array(
                'userphone'=>$phone,
                'usernumber'=>$amount,
                'useremail'=>$rentday,
                'createdate'=>date("d-m-Y h:m:s"),
                'fullname'=>$duedate
                );
			$this->db->insert($this->db_userorder,$data);
            $id = $this->db->insert_id();
            $this->db->trans_complete();
			return $id;
		}
	}

    public function checkexitphone($phone=null){
        $this->db->where('userphone',$phone);
        $query = $this->db->get($this->db_userorder);
        if($query->num_rows() > 0){
            return 1;
        } else {
            return 0;
        }
    }

}
