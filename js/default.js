$(document).ready(function(){
	// untuk melakukan delete pada link
	$(".delete").click(function(){
		return confirm("Apakah anda yakin akan menghapus data ini?");
	})

	//untuk melakukan filter data table
	$(".filter").keyup(function(){
		var input = $(this).val().toLowerCase();

		for(i = 0; i <= $(".filter_data tr").length; i++){
			if($(".filter_data tr").eq(i).toLowerCase().indexOf(input) > -1){
				$(".filter_data tr").eq(i).show();
			}else{
				$(".filter_data tr").eq(i).hide();
			}
		}
	})

	//untuk menampilkan tanggal dengan datepicker
	$(".datepicker").datepicker({
		dateFormat: "dd-mm-yy"
	});
})