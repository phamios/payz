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

class Post_model extends CI_Model {

    var $db_post = "tbl_post";

    function __construct() {
        parent::__construct();
        $this->load->database();
    }

	public function listmenupost(){
		$this->db->order_by('id', "asc");
		$this->db->where('posttype', "1");
        $query = $this->db->get($this->db_post);
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return 0;
        }
	}

	public function listallpost(){
		$this->db->order_by('id', "desc");
        $query = $this->db->get($this->db_post);
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return 0;
        }
	}

    public function insertPost($type,$title,$des,$content,$menu){
        $data = array(
            'posttype'=>$type,
            'posttitle'=>$title,
            'postdes'=>$des,
            'createdate'=>date("d-m-Y h:m:s"),
            'postcontent'=>$content,
            'showmenu'=>$menu,
            'status'=>1,
            );
        $this->db->insert($this->db_post,$data);
        $id = $this->db->insert_id();
        $this->db->trans_complete();
		return $id;
    }

    public function checkexitphone($phone=null){
        $this->db->where('userphone',$phone);
        $query = $this->db->get($this->db_post);
        if($query->num_rows() > 0){
            return 1;
        } else {
            return 0;
        }
    }

    public function delpost($postid=null){
        $this->db->where(array(
            'id'=>$postid,
        ));
        $this->db->delete($this->db_post);
    }

}
