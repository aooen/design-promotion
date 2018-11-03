<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/typeface-nanum-gothic@0.0.63">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/typeface-nanum-square-round@1.0.1">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ionicons@4.4.6/dist/css/ionicons.min.css">
	<link rel="stylesheet" href="<?=base_url('static/css/main.css')?>">
<?php if (isset($mainpage) && $mainpage) { ?>
	<link rel="stylesheet" href="<?=base_url('static/css/banner.css')?>">
<?php } ?>
	<title>프로모션</title>
	<script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
	<script src="<?=base_url('static/js/main.js')?>"></script>
</head>
<body>
<header>
	<div class="container">
		<h1><a href="<?=base_url('intro')?>">Wrapping Remover</a></h1>
		<nav>
			<ul>
				<li><a href="<?=base_url('intro')?>">상품 소개</a></li>
				<li><a href="<?=base_url('spec')?>">특·장점</a></li>
				<li><a href="<?=base_url('purchase')?>">바로 구매</a></li>
				<li><a href="<?=base_url('community')?>">커뮤니티</a></li>
			</ul>
		</nav>
	</div>
</header>