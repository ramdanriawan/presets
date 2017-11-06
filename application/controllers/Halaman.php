<?php 

 class Halaman extends CI_Controller
 {
 	
 	function index()
 	{
 		$this->load->view("login");
 	}

 	function logout()
 	{
 		$this->load->view("logout");
 	}

 	function insert()
 	{
 		$this->load->view("insert");
 	}

 	function update()
 	{
 		$this->load->view("update");
 	}

 	function delete()
 	{
 		$this->load->view("delete");
 	}

 	function select()
 	{
 		$this->load->view("select");
 	}

 	function register()
 	{
 		$this->load->view("register");
 	}

 	function cari()
 	{
 		$this->load->view("cari");
 	}

 	function edit_admin()
 	{
 		$this->load->view("edit_admin");
 	}

 }

 ?>