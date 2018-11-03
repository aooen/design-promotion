<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {
	public function __construct () {
		parent::__construct();
		$this->load->helper('url');
	}

	public function _remap($method) {
		$this->load->view('header.include.php', [
			'mainpage' => true
		]);
		if (method_exists($this, $method)) {
			$this->$method();
		}
		$this->load->view('footer.include.php');
	}

	public function index()
	{
		$this->load->view('main');
	}
}
