
$(window).on('load', function() {

	// Row Toggler
	// -----------------------------------------------------------------
	$('#demo-foo-row-toggler').footable();

	// Accordion
	// -----------------------------------------------------------------
	$('#demo-foo-accordion').footable().on('footable_row_expanded', function(e) {
		$('#demo-foo-accordion tbody tr.footable-detail-show').not(e.row).each(function() {
			$('#demo-foo-accordion').data('footable').toggleDetail(this);
		});
	});

	// Pagination
	// -----------------------------------------------------------------
	$('#demo-foo-pagination').footable();
	$('#demo-show-entries').change(function (e) {
		e.preventDefault();
		var pageSize = $(this).val();
		$('#demo-foo-pagination').data('page-size', pageSize);
		$('#demo-foo-pagination').trigger('footable_initialized');
	});

	// Filtering
	// -----------------------------------------------------------------
	var filtering = $('#demo-foo-filtering');
	filtering.footable().on('footable_filtering', function (e) {
		var selected = $('#demo-foo-filter-status').find(':selected').val();
		e.filter += (e.filter && e.filter.length > 0) ? ' ' + selected : selected;
		e.clear = !e.filter;
	});

	// Filter status
	$('#demo-foo-filter-status').change(function (e) {
		e.preventDefault();
		filtering.trigger('footable_filter', {filter: $(this).val()});
	});

	// Search input
	$('#demo-foo-search').on('input', function (e) {
		e.preventDefault();
		filtering.trigger('footable_filter', {filter: $(this).val()});
	});


	

	// Search input
	$('#demo-input-search2').on('input', function (e) {
		e.preventDefault();
		addrow.trigger('footable_filter', {filter: $(this).val()});
	});
	
	// Add & Remove Row
	var addrow = $('#demo-foo-addrow');
	addrow.footable().on('click', '.delete-row-btn', function() {

		//get the footable object
		var footable = addrow.data('footable');

		//get the row we are wanting to delete
		var row = $(this).parents('tr:first');

		//delete the row
		footable.removeRow(row);
	});
    var addrow = $('#demo-foo-addrow2');
	addrow.footable().on('click', '.delete-row-btn', function() {

		//get the footable object
		var footable = addrow.data('footable');

		//get the row we are wanting to delete
		var row = $(this).parents('tr:first');

		//delete the row
		footable.removeRow(row);
	});
	// Add Row Button
	// לשים קובייה בדלי
	$('#demo-btn-addrow').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow = '<tr><td>לשים קובייה בדלי</td><td>MT</td><td>לנה</td><td>3 Oct 2016</td><td><span class="label label-table label-info">הצבעה</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow);
	});
	$('#demo-btn-addrow2').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow2 = '<tr><td>לשים קובייה בדלי</td><td>RR</td><td>דיאנה</td><td>3 Oct 2016</td><td><span class="label label-table label-success">+</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow2);
	});
	$('#demo-btn-addrow3').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow3 = '<tr><td>לשים קובייה בדלי</td><td>BT</td><td>שרון</td><td>3 Oct 2016</td><td><span class="label label-table label-primary">מילולי</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow3);
	});
	$('#demo-btn-addrow4').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow4 = '<tr><td>לשים קובייה בדלי</td><td>BT</td><td>רוני</td><td>3 Oct 2016</td><td><span class="label label-table label-danger">-</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow4);
	});
	$('#demo-btn-addrow6').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow6 = '<tr><td>לשים קובייה בדלי</td><td>RR</td><td>רוני</td><td>3 Oct 2016</td><td><span class="label label-table label-warning">חלקי</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow6);
	});

	// Add Row Button
	// לצלצל בפעמון
	$('#demo-btn-addrow7').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow7 = '<tr><td>לצלצל בפעמון</td><td>MT</td><td>לנה</td><td>3 Oct 2016</td><td><span class="label label-table label-info">הצבעה</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow7);
	});
	$('#demo-btn-addrow8').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow8 = '<tr><td>לצלצל בפעמון</td><td>RR</td><td>דיאנה</td><td>3 Oct 2016</td><td><span class="label label-table label-success">+</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow8);
	});
	$('#demo-btn-addrow9').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow9 = '<tr><td>לצלצל בפעמון</td><td>BT</td><td>שרון</td><td>3 Oct 2016</td><td><span class="label label-table label-primary">מילולי</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow9);
	});
	$('#demo-btn-addrow10').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow10 = '<tr><td>לצלצל בפעמון</td><td>BT</td><td>רוני</td><td>3 Oct 2016</td><td><span class="label label-table label-danger">-</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow10);
	});
	$('#demo-btn-addrow11').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow11 = '<tr><td>לצלצל בפעמון</td><td>RR</td><td>רוני</td><td>3 Oct 2016</td><td><span class="label label-table label-warning">חלקי</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow11);
	});	
		// Add Row Button
	// לשתות מכוס
	$('#demo-btn-addrow12').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow12 = '<tr><td>לשתות מכוס</td><td>MT</td><td>לנה</td><td>3 Oct 2016</td><td><span class="label label-table label-info">הצבעה</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow12);
	});
	$('#demo-btn-addrow13').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow13 = '<tr><td>לשתות מכוס</td><td>RR</td><td>דיאנה</td><td>3 Oct 2016</td><td><span class="label label-table label-success">+</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow13);
	});
	$('#demo-btn-addrow14').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow14 = '<tr><td>לשתות מכוס</td><td>BT</td><td>שרון</td><td>3 Oct 2016</td><td><span class="label label-table label-primary">מילולי</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow14);
	});
	$('#demo-btn-addrow15').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow15 = '<tr><td>לשתות מכוס</td><td>BT</td><td>רוני</td><td>3 Oct 2016</td><td><span class="label label-table label-danger">-</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow15);
	});
	$('#demo-btn-addrow16').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow16 = '<tr><td>לשתות מכוס</td><td>RR</td><td>רוני</td><td>3 Oct 2016</td><td><span class="label label-table label-warning">חלקי</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow16);
	});	
			// Add Row Button
	// לחבוש כובע
	$('#demo-btn-addrow17').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow17 = '<tr><td>לחבוש כובע</td><td>MT</td><td>לנה</td><td>3 Oct 2016</td><td><span class="label label-table label-info">הצבעה</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow17);
	});
	$('#demo-btn-addrow18').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow18 = '<tr><td>לחבוש כובע</td><td>RR</td><td>דיאנה</td><td>3 Oct 2016</td><td><span class="label label-table label-success">+</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow18);
	});
	$('#demo-btn-addrow19').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow19 = '<tr><td>לחבוש כובע</td><td>BT</td><td>שרון</td><td>3 Oct 2016</td><td><span class="label label-table label-primary">מילולי</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow19);
	});
	$('#demo-btn-addrow20').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow20 = '<tr><td>לחבוש כובע</td><td>BT</td><td>רוני</td><td>3 Oct 2016</td><td><span class="label label-table label-danger">-</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow20);
	});
	$('#demo-btn-addrow21').click(function() {

		//get the footable object
		var footable = addrow.data('footable');
		
		//build up the row we are wanting to add
		var newRow21 = '<tr><td>לחבוש כובע</td><td>RR</td><td>רוני</td><td>3 Oct 2016</td><td><span class="label label-table label-warning">חלקי</span></td><td><button type="button" class="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete"><i class="ti-close" aria-hidden="true"></i></button></td></tr>';

		//add it
		footable.appendRow(newRow21);
	});	
	
});
