function x(e,n,a){window.enmity.settings.set(e,n,a)}function F(e,n,a){return window.enmity.settings.get(e,n,a)}const{components:t}=window.enmity;t.Alert,t.Button,t.FlatList;const O=t.Image;t.ImageBackground,t.KeyboardAvoidingView,t.Modal,t.Pressable,t.RefreshControl;const j=t.ScrollView;t.SectionList,t.StatusBar,t.StyleSheet,t.Switch;const b=t.Text;t.TextInput,t.TouchableHighlight;const Y=t.TouchableOpacity;t.TouchableWithoutFeedback,t.Touchable;const f=t.View;t.VirtualizedList,t.Form,t.FormArrow,t.FormCTA,t.FormCTAButton,t.FormCardSection,t.FormCheckbox,t.FormDivider,t.FormHint,t.FormIcon,t.FormInput,t.FormLabel,t.FormRadio;const r=t.FormRow,D=t.FormSection;t.FormSelect,t.FormSubLabel;const w=t.FormSwitch;t.FormTernaryCheckBox,t.FormText,t.FormTextColors,t.FormTextSizes;function z(e){window.enmity.plugins.registerPlugin(e)}function G(...e){return window.enmity.modules.getByProps(...e)}function K(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const h=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const W=window.enmity.modules.common.Toasts,C=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const X=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const q=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function J(e){return window.enmity.patcher.create(e)}var m="GlobalBadges-enmity-lucy-mod",s="1.1.4",Q="Adds global badges from other client mods",$=[{name:"HypedDomi",id:"354191516979429376"}],Z="#E54B4B",L="https://raw.githubusercontent.com/HypedDomi/Enmity-Stuff/main/dist/GlobalBadges.js",_="https://github.com/HypedDomi/Enmity-Stuff/tree/main/GlobalBadges",B=["Added Setting to disable specific badges"],c={name:m,version:s,description:Q,authors:$,color:Z,rawUrl:L,sourceUrl:_,changelog:B};const{native:S}=window.enmity;function ee(){S.reload()}S.version,S.build,S.device,S.version;async function U(){let e=(await(await fetch(`${L}?${Math.random()}`)).text()).match(/\d\.\d\.\d+/g);if(!(e!=null&&e.length))return!1;e=e[0].replace('"',""),e=e.split(".").map(a=>parseInt(a));const n=s.split(".").map(a=>parseInt(a));return e[0]>n[0]||e[0]==n[0]&&e[1]>n[1]?!0:e[0]==n[0]&&e[1]==n[1]&&e[2]>n[2]}const te=e=>{let n=[];fetch(e).then(a=>a.text()).then(a=>n=a.match(/\d\.\d\.\d+/g)),window.enmity.plugins.installPlugin(e,({data:a})=>{a=="installed_plugin"||a=="overridden_plugin"?C.show({title:`Updated ${m}`,body:`Successfully updated to version **${n!=null&&n.length?n[0]:s}**. Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Later",onConfirm:()=>ee()}):console.log(`[${m}] Plugin failed to update to version ${s}`)})};function P(){C.show({title:"Plugin Updater",body:`**${m}** has an update. Do you want to update now?`,confirmText:"Update",cancelText:"No",onConfirm:()=>{x(m,"_didUpdate",!0),te(`${L}?${Math.random()}`)}})}function V(){!B.length||C.show({title:`${m} - v${s}`,body:`- ${B.join(`
- `)}`,confirmText:"OK",onConfirm:()=>x(m,"_changelog",s)})}const R=G("transitionToGuild");var oe=({settings:e})=>{const n=q.createThemedStyleSheet({item:{color:h.ThemeColorMap.TEXT_MUTED},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},main_text:{opacity:.975,letterSpacing:.25},header:{color:h.ThemeColorMap.HEADER_PRIMARY,fontFamily:h.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:h.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),[a,u]=o.useState(),[i,p]=o.useState();return o.createElement(o.Fragment,null,o.createElement(j,{onTouchStart:l=>{u(l.nativeEvent.pageX),p(l.nativeEvent.pageY)},onTouchEnd:l=>{a-l.nativeEvent.pageX<-100&&i-l.nativeEvent.pageY<40&&i-l.nativeEvent.pageY>-40&&X.pop()}},o.createElement(f,null,o.createElement(f,{style:n.text_container},o.createElement(b,{style:[n.main_text,n.header]},m),o.createElement(f,{style:{flexDirection:"row"}},o.createElement(b,{style:[n.main_text,n.sub_header]},"Author:"),o.createElement(b,{style:[n.main_text,n.sub_header,{paddingLeft:4,fontFamily:h.Fonts.DISPLAY_BOLD}]},` ${$.map(l=>l.name).join(", ")}`)),o.createElement(f,{style:{flexDirection:"row"}},o.createElement(b,{style:[n.main_text,n.sub_header]},"Version:"),o.createElement(b,{style:[n.main_text,n.sub_header,{paddingLeft:4,fontFamily:h.Fonts.DISPLAY_BOLD}]},` ${s}`)))),o.createElement(D,{title:"Badges"},o.createElement(r,{label:"Aliucord",subLabel:"Show Aliucord Badges",trailing:o.createElement(w,{value:e.getBoolean("showAliucord",!0),onValueChange:()=>e.toggle("showAliucord",!0)})}),o.createElement(r,{label:"BetterDiscord",subLabel:"Show BetterDiscord Badges",trailing:o.createElement(w,{value:e.getBoolean("showBetterDiscord",!0),onValueChange:()=>e.toggle("showBetterDiscord",!0)})}),o.createElement(r,{label:"Replugged",subLabel:"Show Replugged Badges",trailing:o.createElement(w,{value:e.getBoolean("showReplugged",!0),onValueChange:()=>e.toggle("showReplugged",!0)})}),o.createElement(r,{label:"Velocity",subLabel:"Show Velocity Badges",trailing:o.createElement(w,{value:e.getBoolean("showVelocity",!0),onValueChange:()=>e.toggle("showVelocity",!0)})}),o.createElement(r,{label:"Vencord",subLabel:"Show Vencord Badges",trailing:o.createElement(w,{value:e.getBoolean("showVencord",!0),onValueChange:()=>e.toggle("showVencord",!0)})})),o.createElement(D,{title:"Updates"},o.createElement(r,{label:"Check for Updates on startup",subLabel:"Checks automatically for updates when starting the Plugin",trailing:o.createElement(w,{value:e.getBoolean("autoUpdateCheck",!0),onValueChange:()=>e.toggle("autoUpdateCheck",!0)})}),o.createElement(r,{label:"Check for Updates",trailing:r.Arrow,onPress:()=>{U().then(l=>{l?P():C.show({title:"Plugin Updater",body:`**${m}** is already on the latest version (**${s}**)`,confirmText:"OK"})})}}),o.createElement(r,{label:"Show Changelog",subLabel:`Shows the changelog for v${s}`,trailing:r.Arrow,onPress:()=>V(),disabled:!B.length})),o.createElement(D,{title:"Source"},o.createElement(r,{label:"Source",subLabel:`See the Source Code for ${m}`,trailing:r.Arrow,onPress:()=>R==null?void 0:R.openURL(_)}))))};const k="https://clientmodbadges-api.herokuapp.com/",E=new Map,I=1e3*60*15,ne=(e,n)=>{var a,u;!E.has(e)||((a=E.get(e))==null?void 0:a.expires)<Date.now()?e==="880825467442196561"?fetch(`https://raw.githubusercontent.com/AroLucy/Files/main/${e}.json`).then(i=>i.json()).then(i=>{E.set(e,{badges:i,expires:Date.now()+I}),n(i)}):fetch(`${k}/users/${e}`).then(i=>i.json()).then(i=>{E.set(e,{badges:i,expires:Date.now()+I}),n(i)}):n((u=E.get(e))==null?void 0:u.badges)},M=({name:e,img:n})=>{const a={wrapper:{alignItems:"center",flexDirection:"row",justifyContent:"flex-end"},image:{width:24,height:24,resizeMode:"contain",marginHorizontal:2}};return o.createElement(f,{style:a.wrapper},o.createElement(Y,{onPress:()=>W.open({content:e,source:{uri:n}})},o.createElement(O,{style:a.image,source:{uri:n}})))},N=J(c.name),ae={...c,onStart(){F(c.name,"_didUpdate",!1)||(F(c.name,"autoUpdateCheck",!0)&&U().then(n=>{n&&P()}),F(c.name,"_changelog",c.version)!==c.version&&V()),x(c.name,"_didUpdate",!1);const e=K("ProfileBadges",{all:!0,default:!1});for(const n of e)N.after(n,"default",(a,[{user:{id:u}}],i)=>{const[p,l]=o.useState({});o.useEffect(()=>ne(u,l),[]);const y=[];if(!p||(Object.keys(p).forEach(g=>{p[g].forEach(d=>{if(g.toLowerCase()!=="badgevault"){const T=`${k}badges/${g}/${d.replace(g,"").trim().split(" ")[0]}`,v={hunter:"Bug Hunter",early:"Early User"};v[d]&&(d=v[d]);const A=d.replace(g,"").trim(),H=`${g} ${A.charAt(0).toUpperCase()+A.slice(1)}`;y.push(o.createElement(M,{name:H,img:T}))}else{const T=d.badge,v=d.name;y.push(o.createElement(M,{name:v,img:T}))}})}),!y.length))return i;i.props.badges?i.props.badges.push(...y):i.props.children.push(...y)})},onStop(){N.unpatchAll()},getSettingsPanel({settings:e}){return o.createElement(oe,{settings:e})}};z(ae);
