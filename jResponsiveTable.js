/* =========================================================
 * jResponsiveTable.js
 * =========================================================
 * Started by José Javier Fernandez;
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * v1.0.0 Primera version, añade css a la tabla para que se comporte como bloque
 * ========================================================= */
 
 jQuery.fn.extend({
  jResponsiveTable: function() {
	return this.each(function() {
		if (this.id!=null){
			var idtabla=this.id
			 console.log("Se añade css para la tabla "+idtabla);
			 css='@media only screen and (max-width:800px) {\n';
			css+='#'+idtabla+' thead tr {position: absolute;top: -9999px;left: -9999px;}\n';
			css+='#'+idtabla+' thead, #'+idtabla+' tbody,  #'+idtabla+' th,  #'+idtabla+' td,  #'+idtabla+' tr {display:block;}\n';
			css+='#'+idtabla+' td {position: relative; padding-left: 50%;}\n';
			css+='#'+idtabla+' td:before {position: absolute;/top: 0;left: 6px;width: 45%;padding-right: 10px;white-space: nowrap;}\n';
			$('#'+this.id+' thead tr th').each(function(index) {
				css+=' #'+idtabla+' td:nth-of-type('+(index+1)+'):before { content: "'+this.innerHTML+'"; }\n';


			});
			css+='}';
			$('body').append('<style>'+css+'</style>');
		}
     
    });
  }
});