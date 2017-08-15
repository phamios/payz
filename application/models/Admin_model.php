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

class Admin_model extends CI_Model {

    var $db_admin = "tbl_admin"; 

    function __construct() {
        parent::__construct(); 
        $this->load->database();
    }
     
    public function authenlogin($name=null,$pass=null){
        $this->db->where(array(
            'adminame'=>$name,
            'adminpass'=>$pass
        )); 
        $query = $this->db->get($this->db_admin);
        if($query->num_rows() > 0){
            return 1;
        } else {
            return 0;
        }
    }
    
    
     
}