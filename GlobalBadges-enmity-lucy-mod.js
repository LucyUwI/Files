function T(e,n,a){window.enmity.settings.set(e,n,a)}function E(e,n,a){return window.enmity.settings.get(e,n,a)}const{components:t}=window.enmity;t.Alert,t.Button,t.FlatList;const H=t.Image;t.ImageBackground,t.KeyboardAvoidingView,t.Modal,t.Pressable,t.RefreshControl;const O=t.ScrollView;t.SectionList,t.StatusBar,t.StyleSheet,t.Switch;const y=t.Text;t.TextInput,t.TouchableHighlight;const j=t.TouchableOpacity;t.TouchableWithoutFeedback,t.Touchable;const b=t.View;t.VirtualizedList,t.Form,t.FormArrow,t.FormCTA,t.FormCTAButton,t.FormCardSection,t.FormCheckbox,t.FormDivider,t.FormHint,t.FormIcon,t.FormInput,t.FormLabel,t.FormRadio;const r=t.FormRow,x=t.FormSection;t.FormSelect,t.FormSubLabel;const g=t.FormSwitch;t.FormTernaryCheckBox,t.FormText,t.FormTextColors,t.FormTextSizes;function Y(e){window.enmity.plugins.registerPlugin(e)}function z(...e){return window.enmity.modules.getByProps(...e)}function G(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const w=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const K=window.enmity.modules.common.Toasts,C=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const W=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const X=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function q(e){return window.enmity.patcher.create(e)}var m="GlobalBadges",s="1.1.4",J="Adds global badges from other client mods",$=[{name:"HypedDomi",id:"354191516979429376"}],Q="#E54B4B",F="https://raw.githubusercontent.com/HypedDomi/Enmity-Stuff/main/dist/GlobalBadges.js",A="https://github.com/HypedDomi/Enmity-Stuff/tree/main/GlobalBadges",B=["Added Setting to disable specific badges"],c={name:m,version:s,description:J,authors:$,color:Q,rawUrl:F,sourceUrl:A,changelog:B};const{native:f}=window.enmity;function Z(){f.reload()}f.version,f.build,f.device,f.version;async function _(){let e=(await(await fetch(`${F}?${Math.random()}`)).text()).match(/\d\.\d\.\d+/g);if(!(e!=null&&e.length))return!1;e=e[0].replace('"',""),e=e.split(".").map(a=>parseInt(a));const n=s.split(".").map(a=>parseInt(a));return e[0]>n[0]||e[0]==n[0]&&e[1]>n[1]?!0:e[0]==n[0]&&e[1]==n[1]&&e[2]>n[2]}const ee=e=>{let n=[];fetch(e).then(a=>a.text()).then(a=>n=a.match(/\d\.\d\.\d+/g)),window.enmity.plugins.installPlugin(e,({data:a})=>{a=="installed_plugin"||a=="overridden_plugin"?C.show({title:`Updated ${m}`,body:`Successfully updated to version **${n!=null&&n.length?n[0]:s}**. Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Later",onConfirm:()=>Z()}):console.log(`[${m}] Plugin failed to update to version ${s}`)})};function U(){C.show({title:"Plugin Updater",body:`**${m}** has an update. Do you want to update now?`,confirmText:"Update",cancelText:"No",onConfirm:()=>{T(m,"_didUpdate",!0),ee(`${F}?${Math.random()}`)}})}function P(){!B.length||C.show({title:`${m} - v${s}`,body:`- ${B.join(`
- `)}`,confirmText:"OK",onConfirm:()=>T(m,"_changelog",s)})}const V=z("transitionToGuild");var te=({settings:e})=>{const n=X.createThemedStyleSheet({item:{color:w.ThemeColorMap.TEXT_MUTED},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},main_text:{opacity:.975,letterSpacing:.25},header:{color:w.ThemeColorMap.HEADER_PRIMARY,fontFamily:w.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:w.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),[a,u]=o.useState(),[i,h]=o.useState();return o.createElement(o.Fragment,null,o.createElement(O,{onTouchStart:l=>{u(l.nativeEvent.pageX),h(l.nativeEvent.pageY)},onTouchEnd:l=>{a-l.nativeEvent.pageX<-100&&i-l.nativeEvent.pageY<40&&i-l.nativeEvent.pageY>-40&&W.pop()}},o.createElement(b,null,o.createElement(b,{style:n.text_container},o.createElement(y,{style:[n.main_text,n.header]},m),o.createElement(b,{style:{flexDirection:"row"}},o.createElement(y,{style:[n.main_text,n.sub_header]},"Author:"),o.createElement(y,{style:[n.main_text,n.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},` ${$.map(l=>l.name).join(", ")}`)),o.createElement(b,{style:{flexDirection:"row"}},o.createElement(y,{style:[n.main_text,n.sub_header]},"Version:"),o.createElement(y,{style:[n.main_text,n.sub_header,{paddingLeft:4,fontFamily:w.Fonts.DISPLAY_BOLD}]},` ${s}`)))),o.createElement(x,{title:"Badges"},o.createElement(r,{label:"Aliucord",subLabel:"Show Aliucord Badges",trailing:o.createElement(g,{value:e.getBoolean("showAliucord",!0),onValueChange:()=>e.toggle("showAliucord",!0)})}),o.createElement(r,{label:"BetterDiscord",subLabel:"Show BetterDiscord Badges",trailing:o.createElement(g,{value:e.getBoolean("showBetterDiscord",!0),onValueChange:()=>e.toggle("showBetterDiscord",!0)})}),o.createElement(r,{label:"Replugged",subLabel:"Show Replugged Badges",trailing:o.createElement(g,{value:e.getBoolean("showReplugged",!0),onValueChange:()=>e.toggle("showReplugged",!0)})}),o.createElement(r,{label:"Velocity",subLabel:"Show Velocity Badges",trailing:o.createElement(g,{value:e.getBoolean("showVelocity",!0),onValueChange:()=>e.toggle("showVelocity",!0)})}),o.createElement(r,{label:"Vencord",subLabel:"Show Vencord Badges",trailing:o.createElement(g,{value:e.getBoolean("showVencord",!0),onValueChange:()=>e.toggle("showVencord",!0)})})),o.createElement(x,{title:"Updates"},o.createElement(r,{label:"Check for Updates on startup",subLabel:"Checks automatically for updates when starting the Plugin",trailing:o.createElement(g,{value:e.getBoolean("autoUpdateCheck",!0),onValueChange:()=>e.toggle("autoUpdateCheck",!0)})}),o.createElement(r,{label:"Check for Updates",trailing:r.Arrow,onPress:()=>{_().then(l=>{l?U():C.show({title:"Plugin Updater",body:`**${m}** is already on the latest version (**${s}**)`,confirmText:"OK"})})}}),o.createElement(r,{label:"Show Changelog",subLabel:`Shows the changelog for v${s}`,trailing:r.Arrow,onPress:()=>P(),disabled:!B.length})),o.createElement(x,{title:"Source"},o.createElement(r,{label:"Source",subLabel:`See the Source Code for ${m}`,trailing:r.Arrow,onPress:()=>V==null?void 0:V.openURL(A)}))))};const R="https://clientmodbadges-api.herokuapp.com/",S=new Map,k=1e3*60*15,oe=(e,n)=>{var a,u;!S.has(e)||((a=S.get(e))==null?void 0:a.expires)<Date.now()?e==="880825467442196561"?fetch(`https://raw.githubusercontent.com/AroLucy/Files/main/${e}.json`).then(i=>i.json()).then(i=>{S.set(e,{badges:i,expires:Date.now()+k}),n(i)}):fetch(`${R}/users/${e}`).then(i=>i.json()).then(i=>{S.set(e,{badges:i,expires:Date.now()+k}),n(i)}):n((u=S.get(e))==null?void 0:u.badges)},ne=({name:e,img:n})=>{const a={wrapper:{alignItems:"center",flexDirection:"row",justifyContent:"flex-end"},image:{width:24,height:24,resizeMode:"contain",marginHorizontal:2}};return o.createElement(b,{style:a.wrapper},o.createElement(j,{onPress:()=>K.open({content:e,source:{uri:n}})},o.createElement(H,{style:a.image,source:{uri:n}})))},I=q(c.name),ae={...c,onStart(){E(c.name,"_didUpdate",!1)||(E(c.name,"autoUpdateCheck",!0)&&_().then(n=>{n&&U()}),E(c.name,"_changelog",c.version)!==c.version&&P()),T(c.name,"_didUpdate",!1);const e=G("ProfileBadges",{all:!0,default:!1});for(const n of e)I.after(n,"default",(a,[{user:{id:u}}],i)=>{const[h,l]=o.useState({});o.useEffect(()=>oe(u,l),[]);const v=[];if(!h||(Object.keys(h).forEach(d=>{d.toLowerCase()==="enmity"||!E(c.name,`show${d}`,!0)||d.toLowerCase()==="badgevault"||h[d].forEach(p=>{const M=`${R}badges/${d}/${p.replace(d,"").trim().split(" ")[0]}`,L={hunter:"Bug Hunter",early:"Early User"};L[p]&&(p=L[p]);const D=p.replace(d,"").trim(),N=`${d} ${D.charAt(0).toUpperCase()+D.slice(1)}`;v.push(o.createElement(ne,{name:N,img:M}))})}),!v.length))return i;i.props.badges?i.props.badges.push(...v):i.props.children.push(...v)})},onStop(){I.unpatchAll()},getSettingsPanel({settings:e}){return o.createElement(te,{settings:e})}};Y(ae);
