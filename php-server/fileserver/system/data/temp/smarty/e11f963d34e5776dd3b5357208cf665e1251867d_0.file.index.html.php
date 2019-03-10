<?php
/* Smarty version 3.1.30, created on 2019-01-08 16:20:38
  from "/var/www/html/enricozammitlonardelli.com/enricozl/php-server/fileserver/system/modules/install/sections/default/html/pages/index.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5c34cdd6243713_24148509',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e11f963d34e5776dd3b5357208cf665e1251867d' => 
    array (
      0 => '/var/www/html/enricozammitlonardelli.com/enricozl/php-server/fileserver/system/modules/install/sections/default/html/pages/index.html',
      1 => 1528207232,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c34cdd6243713_24148509 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE html>
<html>
<head>
	<title>FileRun :: Installation</title>
	<link rel="stylesheet" href="css/style.css?v=<?php echo \S::forURL($_smarty_tpl->tpl_vars['app']->value['currentVersion']);?>
" />
	<link rel="stylesheet" href="css/ext.php?v=<?php echo \S::forURL($_smarty_tpl->tpl_vars['app']->value['currentVersion']);?>
&theme=blue<?php if ($_smarty_tpl->tpl_vars['app']->value['config']['misc']['developmentMode']) {?>&debug=1<?php }?>" />
	<?php echo '<script'; ?>
 src="js/min.php?extjs=1&v=<?php echo \S::forURL($_smarty_tpl->tpl_vars['app']->value['currentVersion']);?>
"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="js/install.js?v=<?php echo \S::forURL($_smarty_tpl->tpl_vars['app']->value['currentVersion']);?>
"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
>
	var URLRoot = '<?php echo $_smarty_tpl->tpl_vars['app']->value['url']['root'];?>
';
	var appName = 'FileRun';
	<?php echo '</script'; ?>
>
    <style>.ext-el-mask { background-color: white; }</style>
</head>
<body id="theBODY">
</body>
</html><?php }
}
