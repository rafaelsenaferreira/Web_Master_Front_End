<!DOCTYPE html>
<html>
<body>
 
<?php  
    $cores = array("Janeiro", "Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"); 
  ?>

<select >
	<?php foreach ($cores as $value) { ?>
	<option value="<?php echo "$value"; ?>"><?php echo "$value"; ?></option>
<?php } ?>

</select>


 
</body>
</html>