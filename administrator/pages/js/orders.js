var manageOrdrTable;var orderzid=document.getElementById('orderid').value;$(document).ready(function(){$('table.display').dataTable();manageOrdrTable=$("#ordersTable").DataTable({"ajax":{"url":'orders/order_action/retrieve.php',"type":'POST',"data":{orderzid:orderzid}},"order":[]});$("#addMemberModalBtn").on('click',function(){return false;});});function removeMember(id=null){if(id){$("#removeBtn").unbind('click').bind('click',function(){$.ajax({url:'orders/order_action/remove.php',type:'post',data:{member_id:id},dataType:'json',success:function(response){if(response.success==true){$(".removeMessages").html('<div class="alert alert-success alert-dismissible" role="alert">'+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+'<strong> <span class="glyphicon glyphicon-ok-sign"></span> </strong>'+response.messages+'</div>');manageOrdrTable.ajax.reload();$("#removeMemberModal").modal('hide');}else{$(".removeMessages").html('<div class="alert alert-warning alert-dismissible" role="alert">'+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+'<strong> <span class="glyphicon glyphicon-exclamation-sign"></span> </strong>'+response.messages+'</div>');manageOrdrTable.ajax.reload();$("#removeMemberModal").modal('hide');}}});});}else{alert('Error: Refresh the page again');}}
function updateMember(id=null){if(id){$("#updatebutton").unbind('click').bind('click',function(){$.ajax({url:'orders/order_action/update.php',type:'post',data:{member_id:id},dataType:'json',success:function(response){if(response.success==true){manageOrdrTable.ajax.reload();$(".removeMessages").html('<div class="alert alert-success alert-dismissible" role="alert">'+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+'<strong> <span class="glyphicon glyphicon-ok-sign"></span> </strong>'+response.messages+'</div>');$("#updateModal").modal('hide');$('body').removeClass('modal-open');$('.modal-backdrop').remove();}else{$(".removeMessages").html('<div class="alert alert-warning alert-dismissible" role="alert">'+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+'<strong> <span class="glyphicon glyphicon-exclamation-sign"></span> </strong>'+response.messages+'</div>');manageOrdrTable=$("#ordersTable").DataTable();manageOrdrTable.ajax.reload();$("#updateModal").modal('hide');$('body').removeClass('modal-open');$('.modal-backdrop').remove();}}});});}else{alert('Error: Refresh the page again');}}
function editMember(id=null){if(id){$(".form-group").removeClass('has-error').removeClass('has-success');$(".text-danger").remove();$(".edit-messages").html("");$("#member_id").remove();$.ajax({url:'orders/webdesign_action/getSelectedMember.php',type:'post',data:{member_id:id},dataType:'json',success:function(response){$("#editName").val(response.name);$("#editAddress").val(response.address);$("#editContact").val(response.contact);$("#editActive").val(response.active);$(".editMemberModal").append('<input type="hidden" name="member_id" id="member_id" value="'+response.id+'"/>');$("#updateMemberForm").unbind('submit').bind('submit',function(){$(".text-danger").remove();var form=$(this);var editName=$("#editName").val();var editAddress=$("#editAddress").val();var editContact=$("#editContact").val();var editActive=$("#editActive").val();if(editName==""){$("#editName").closest('.form-group').addClass('has-error');$("#editName").after('<p class="text-danger">The Name field is required</p>');}else{$("#editName").closest('.form-group').removeClass('has-error');$("#editName").closest('.form-group').addClass('has-success');}
if(editAddress==""){$("#editAddress").closest('.form-group').addClass('has-error');$("#editAddress").after('<p class="text-danger">The Address field is required</p>');}else{$("#editAddress").closest('.form-group').removeClass('has-error');$("#editAddress").closest('.form-group').addClass('has-success');}
if(editContact==""){$("#editContact").closest('.form-group').addClass('has-error');$("#editContact").after('<p class="text-danger">The Contact field is required</p>');}else{$("#editContact").closest('.form-group').removeClass('has-error');$("#editContact").closest('.form-group').addClass('has-success');}
if(editActive==""){$("#editActive").closest('.form-group').addClass('has-error');$("#editActive").after('<p class="text-danger">The Active field is required</p>');}else{$("#editActive").closest('.form-group').removeClass('has-error');$("#editActive").closest('.form-group').addClass('has-success');}
if(editName&&editAddress&&editContact&&editActive){$.ajax({url:form.attr('action'),type:form.attr('method'),data:form.serialize(),dataType:'json',success:function(response){if(response.success==true){$(".edit-messages").html('<div class="alert alert-success alert-dismissible" role="alert">'+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+'<strong> <span class="glyphicon glyphicon-ok-sign"></span> </strong>'+response.messages+'</div>');manageOrdrTable.ajax.reload();$(".form-group").removeClass('has-success').removeClass('has-error');$(".text-danger").remove();}else{$(".edit-messages").html('<div class="alert alert-warning alert-dismissible" role="alert">'+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+'<strong> <span class="glyphicon glyphicon-exclamation-sign"></span> </strong>'+response.messages+'</div>')}}});}
return false;});}});}else{alert("Error : Refresh the page again");}}