'use strict';

angular.module('myApp.factory', [])
.factory('testFactory', function(){
    return {
        cats : [
					{
						name: 'cat8',
						path: 'pic/cat1',
						count: 0
					},
					{
						name: 'cat2',
						path: 'pic/cat2',
						count: 0
					},
					{
						name: 'cat3',
						path: 'pic/cat3',
						count: 0
					},
					{
						name: 'cat4',
						path: 'pic/cat4',
						count: 0
					},
					{
						name: 'cat5',
						path: 'pic/cat5',
						count: 0
					},
					{
						name: 'cat6',
						path: 'pic/cat6',
						count: 0
					},	
			]
    }               
});