<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {
	public function _remap($method) {
		$this->load->view('header.include');
		if (method_exists($this, $method)) {
			$this->$method();
		}
		$this->load->view('footer.include');
	}

	public function index()
	{
		$this->load->view('main');
	}
}
