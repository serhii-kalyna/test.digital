$(document).ready(function(){
	$('.box4').click(function(e, toReturn){
		var $this = $(this);
		var default_css = {
			position: '',
			left: '',
			top: ''
		};

		var $clone = $this.data('clone') || $this.clone().hide().insertBefore($this);
		$this.data('clone', $clone);

		$this.next('.more-info').show().animate({
			left: ($this.data('show') || false) ? '100%' : '0'
		},
		{
			duration: 600,
			progress: function () {
				if ($this.position().left > $(this).position().left && !($this.data('show') || false)) {
					// .clone().insertAfter($this).visible('none').end()
					$clone.show().css('visibility', 'hidden');
					$this.css({
						position: 'absolute',
						left: $(this).position().left,
						top: $clone.position().top
					});
				}

				if ($this.data('show')) {
					if ($this.position().left < $clone.position().left) {
						if ($this.position().left < $(this).position().left) {
							$this.css({
								position: 'absolute',
								left: $(this).position().left,
								top: $clone.position().top
							});
						}
					} else {
						$this.css({
							position: 'absolute',
							left: $clone.position().left,
							top: $clone.position().top
						});
					}
				}
			},
			complete: function () {
				$(this).css('display', (!$this.data('show')) ? 'block' : '');
				$this.data('show', !($this.data('show') || false));
				if (!$this.data('show')) {
					$this.removeData('clone');
					$clone.remove();
					$this.css(default_css);
				}
			}
		}); //toggle(1000);

		//$this.css('order','-1');  //клік 1
		// $(this).css('order','0') //клік 2
	});
})