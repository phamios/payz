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

    var $db_user = "tbl_users"; 

    function __construct() {
        parent::__construct(); 
        $this->load->database();
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
            $this->db->insert($this->db_user,$data);
            $id = $this->db->insert_id();
            $this->db->trans_complete();
        } else {
            return 0;
        }   
    }
    
    public function checkexitphone($phone=null){
        $this->db->where('userphone',$phone); 
        $query = $this->db->get($this->db_user);
        if($query->num_rows() > 0){
            return 1;
        } else {
            return 0;
        }
    }

}