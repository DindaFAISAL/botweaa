const _0x5e0243=_0x4789;(function(_0x10669b,_0x14f297){const _0x6cd098=_0x4789,_0x3c7032=_0x10669b();while(!![]){try{const _0x504ea1=parseInt(_0x6cd098(0xff))/0x1*(parseInt(_0x6cd098(0xcd))/0x2)+-parseInt(_0x6cd098(0xeb))/0x3+-parseInt(_0x6cd098(0xe8))/0x4*(-parseInt(_0x6cd098(0xe2))/0x5)+-parseInt(_0x6cd098(0xf9))/0x6+-parseInt(_0x6cd098(0xe3))/0x7*(parseInt(_0x6cd098(0xed))/0x8)+parseInt(_0x6cd098(0x103))/0x9+-parseInt(_0x6cd098(0xdf))/0xa*(-parseInt(_0x6cd098(0xd4))/0xb);if(_0x504ea1===_0x14f297)break;else _0x3c7032['push'](_0x3c7032['shift']());}catch(_0x4608e1){_0x3c7032['push'](_0x3c7032['shift']());}}}(_0x8238,0xf242a));const fetch=require(_0x5e0243(0xef)),axios=require('axios'),CFonts=require(_0x5e0243(0xe9)),spin=require(_0x5e0243(0xce)),Crypto=require(_0x5e0243(0xd9)),wait=async _0x4bc034=>new Promise(async(_0x203aa1,_0x58cea5)=>{const _0x5cd396=_0x5e0243,_0x5342a0=_0x5cd396(0xd1)+_0x4bc034[_0x5cd396(0xc9)]('base64'),_0xf5ba86=await fetch(_0x5cd396(0xde),{'method':'POST','body':JSON['stringify']({'image':_0x5342a0}),'headers':{'Content-Type':_0x5cd396(0xf8)}});if(!_0xf5ba86['ok'])_0x58cea5(_0x5cd396(0xc5));const _0x524558=await _0xf5ba86[_0x5cd396(0xf3)]();try{const {is_adult:_0x35ef6e,title:_0x256048,title_chinese:_0x189931,title_romaji:_0x541f10,title_english:_0xefc429,episode:_0x570498,season:_0x16c964,similarity:_0x5bd9ce,filename:_0x53063c,at:_0x39e16a,tokenthumb:_0x3b5c0a,anilist_id:_0x345bcf}=_0x524558[_0x5cd396(0xec)][0x0];let _0x3205f3=()=>_0x5bd9ce<0.89?_0x5cd396(0xc8):'',_0x4bf243=()=>_0x35ef6e?_0x5cd396(0xe4):_0x5cd396(0xcc);_0x203aa1({'video':await getBuffer(_0x5cd396(0xc3)+_0x345bcf+'/'+encodeURIComponent(_0x53063c)+'?t='+_0x39e16a+_0x5cd396(0xfe)+_0x3b5c0a),'teks':_0x3205f3()+_0x5cd396(0xcb)+_0x4bf243()+_0x5cd396(0xd8)+_0x256048+_0x5cd396(0xf2)+_0x541f10+'*\x0a~>\x20Judul\x20Inggris\x20:\x20*'+_0xefc429+_0x5cd396(0xd7)+_0x570498+_0x5cd396(0xee)+_0x16c964+'*'});}catch(_0x3b57c6){console['log'](_0x3b57c6),_0x58cea5(_0x5cd396(0xf0));}}),simih=async _0x1ace29=>{const _0x569e6b=_0x5e0243;try{const _0x5fbca6=await fetch(_0x569e6b(0xf5)+_0x1ace29,{'method':_0x569e6b(0xdc)}),_0x5e4d82=await _0x5fbca6[_0x569e6b(0xf3)]();return _0x5e4d82[_0x569e6b(0xf6)];}catch{return _0x569e6b(0xc7);}},h2k=_0x24299c=>{const _0x9dac8b=_0x5e0243;var _0x3fdaf=['','\x20K','\x20M','\x20G','\x20T','\x20P','\x20E'],_0x15eeb8=Math[_0x9dac8b(0xe0)](Math[_0x9dac8b(0xe7)](_0x24299c))/0x3|0x0;if(_0x15eeb8==0x0)return _0x24299c;var _0x2c12ac=_0x3fdaf[_0x15eeb8],_0x1a3a4c=Math[_0x9dac8b(0x102)](0xa,_0x15eeb8*0x3),_0x37107a=_0x24299c/_0x1a3a4c,_0x39a832=_0x37107a['toFixed'](0x1)+'';if(/\.0$/['test'](_0x39a832))_0x39a832=_0x39a832[_0x9dac8b(0xcf)](0x0,_0x39a832['length']-0x2);return _0x39a832+_0x2c12ac;},getBuffer=async(_0x3933c3,_0x2f3afa)=>{const _0x3b207e=_0x5e0243;try{_0x2f3afa?_0x2f3afa:{};const _0x22fa41=await axios({'method':'get','url':_0x3933c3,'headers':{'DNT':0x1,'Upgrade-Insecure-Request':0x1},..._0x2f3afa,'responseType':_0x3b207e(0xca)});return _0x22fa41[_0x3b207e(0xd0)];}catch(_0x57b4ac){console['log'](_0x3b207e(0xfd)+_0x57b4ac);}},randomBytes=_0x23469b=>{return Crypto['randomBytes'](_0x23469b);},generateMessageID=()=>{const _0x15f0c0=_0x5e0243;return randomBytes(0xa)[_0x15f0c0(0xc9)](_0x15f0c0(0x100))[_0x15f0c0(0xfc)]();},getGroupAdmins=_0x52f590=>{const _0x31d440=_0x5e0243;admins=[];for(let _0x3f58f2 of _0x52f590){_0x3f58f2[_0x31d440(0xd6)]?admins[_0x31d440(0xe6)](_0x3f58f2[_0x31d440(0xd5)]):'';}return admins;},getRandom=_0x2f0854=>{const _0x58696a=_0x5e0243;return''+Math[_0x58696a(0x101)](Math[_0x58696a(0xf4)]()*0x2710)+_0x2f0854;},spinner={'interval':0x78,'frames':['🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛']};let globalSpinner;const getGlobalSpinner=(_0xea1a2e=![])=>{const _0x4262b0=_0x5e0243;if(!globalSpinner)globalSpinner=new spin({'color':_0x4262b0(0xc4),'succeedColor':_0x4262b0(0xdd),'spinner':spinner,'disableSpins':_0xea1a2e});return globalSpinner;};function _0x4789(_0x568261,_0x402e65){const _0x82384b=_0x8238();return _0x4789=function(_0x47893e,_0x53b397){_0x47893e=_0x47893e-0xc2;let _0x2d55d5=_0x82384b[_0x47893e];return _0x2d55d5;},_0x4789(_0x568261,_0x402e65);}spins=getGlobalSpinner(![]);const start=(_0x3b0aff,_0x488752)=>{const _0x507d46=_0x5e0243;spins[_0x507d46(0xda)](_0x3b0aff,{'text':_0x488752});},info=(_0x1a8183,_0x532791)=>{const _0x2de201=_0x5e0243;spins[_0x2de201(0xd3)](_0x1a8183,{'text':_0x532791});},success=(_0x3b9b0d,_0x5d1bc7)=>{const _0x23fc78=_0x5e0243;spins[_0x23fc78(0xe5)](_0x3b9b0d,{'text':_0x5d1bc7});},close=(_0x3fb84e,_0x24e212)=>{spins['fail'](_0x3fb84e,{'text':_0x24e212});},banner=CFonts['say'](_0x5e0243(0xea),{'font':'console','align':_0x5e0243(0xfa),'gradient':['magenta',_0x5e0243(0xf1)]});CFonts[_0x5e0243(0xc6)](_0x5e0243(0xc2),{'font':_0x5e0243(0xd2),'align':_0x5e0243(0xfb),'color':'blue'}),CFonts['say'](_0x5e0243(0xf7),{'font':'console','align':_0x5e0243(0xfb),'gradient':[_0x5e0243(0xf1),_0x5e0243(0xe1)]}),module[_0x5e0243(0xdb)]={'wait':wait,'simih':simih,'getBuffer':getBuffer,'h2k':h2k,'generateMessageID':generateMessageID,'banner':banner,'getGroupAdmins':getGroupAdmins,'getRandom':getRandom,'start':start,'info':info,'success':success,'close':close};function _0x8238(){const _0x131d9c=['abs','4owavLE','cfonts','/system/data/data/com.teremux/files:\x0a[ROOT]\x20STARTING\x20BOT...\x0aBy:\x20Alan\x20Botz','2125800NOLgxM','docs','2600MoPikY','*\x0a~>\x20Season\x20\x20:\x20*','node-fetch','Saya\x20tidak\x20tau\x20ini\x20anime\x20apa','red','*\x0a~>\x20Ejaan\x20Judul\x20:\x20*','json','random','https://simsumi.herokuapp.com/api?text=','success','WELCOME\x20USER\x0aFOLLOW\x20ALL\x20SOSIAL\x20MEDIA\x20ME\x0a-\x20YOUTUBE\x20:\x20Alan\x20Botz\x0a-\x20INSTAGRAM\x20:\x20@Jb_alanganz\x0a-\x20TIKTOK\x20:\x20@alan_gezet\x0a-\x20GITHUB\x20:\x20https://github.com/YT-ALAN-BOTZ','application/json','754188hDpZpY','left','center','toUpperCase','Error\x20:\x20','&token=','47GLSqhs','hex','floor','pow','10166823xOgyWt','ALAN\x20BOTZ','https://media.trace.moe/video/','blue','Gambar\x20tidak\x20ditemukan!','say','Simi\x20ga\x20tau\x20apa\x20yang\x20anda\x20ngomong,\x20bahasa\x20alien\x20yah\x20kak?','Saya\x20memiliki\x20keyakinan\x20rendah\x20dalam\x20hal\x20ini\x20:\x20','toString','arraybuffer','\x0a~>\x20Ecchi\x20:\x20*','Tidak','57944LflrbO','spinnies','substr','data','data:image/jpeg;base64,','slick','update','649nRRxqx','jid','isAdmin','*\x0a~>\x20Episode\x20:\x20*','*\x0a~>\x20Judul\x20Jepang\x20:\x20*','crypto','add','exports','GET','green','https://trace.moe/api/search','178090ypoRnA','log10','magenta','218795ugTrmK','37891ECKTpp','Iya','succeed','push'];_0x8238=function(){return _0x131d9c;};return _0x8238();}