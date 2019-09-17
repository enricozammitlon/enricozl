<?php
/* Smarty version 3.1.30, created on 2019-01-08 16:20:42
  from "/var/www/html/enricozammitlonardelli.com/enricozl/php-server/fileserver/system/modules/install/sections/default/html/pages/requirements.html" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5c34cdda6c8378_57120534',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'bdcdd779e3cc5204f18d03d460d51d62ddcc205a' => 
    array (
      0 => '/var/www/html/enricozammitlonardelli.com/enricozl/php-server/fileserver/system/modules/install/sections/default/html/pages/requirements.html',
      1 => 1528207232,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c34cdda6c8378_57120534 (Smarty_Internal_Template $_smarty_tpl) {
?>
<span style="font-size:16px;font-weight:bold">Server requirements</span><br>
<div style="margin-bottom:10px;margin-top:10px;font-size:12px;">
	Please check the following results and fix any possible problem before continuing.<br>
	For optimizing your server's PHP configuration for FileRun, please check this <a href="http://docs.filerun.com/php_configuration" target="_blank">page</a>.
</div>

<table border="0" cellpadding="5" cellspacing="0" width="100%" style="font-size:12px;">
<tr>
	<td style="border-bottom:1px solid silver;font-weight:bold;" width="40%">Requirement</td>
	<td style="border-bottom:1px solid silver;font-weight:bold;" width="20%">Status</td>
	<td style="border-bottom:1px solid silver;font-weight:bold;" width="40%">Notes</td>
</tr>
<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['app']->value['tests'], 'test');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['test']->value) {
?>
<tr>
	<td style="border-bottom:1px solid silver;" valign="top"><?php echo $_smarty_tpl->tpl_vars['test']->value['title'];?>
</td>
	<td style="border-bottom:1px solid silver;" valign="top"><?php echo $_smarty_tpl->tpl_vars['test']->value['status'];?>
&nbsp;</td>
	<td style="border-bottom:1px solid silver;" valign="top"><?php if ($_smarty_tpl->tpl_vars['test']->value['note'] == 'OK') {?><span style="font-weight:bold;color:green;"><?php echo $_smarty_tpl->tpl_vars['test']->value['note'];?>
</span><?php } else {
echo $_smarty_tpl->tpl_vars['test']->value['note'];
}?></td>
</tr>
<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

</table><?php }
}
