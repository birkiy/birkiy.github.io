/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(e,n,t,s,a){var r=window.console;if(r&&Math.floor((new Date).getTime()/1e3)-n>604800&&r.warn("The Facebook JSSDK is more than 7 days old."),!window[t]&&window.JSON){var o=window[t]={__buffer:{replay:function(){for(var e=this,n=function(n){var s=window[t];e.calls[n][0].split(".").forEach(function(e){return s=s[e]}),s.apply(null,e.calls[n][1])},s=0;s<this.calls.length;s++)n(s);this.calls=[]},calls:[],opts:null},getUserID:function(){return""},getAuthResponse:function(){return null},getAccessToken:function(){return null},init:function(e){o.__buffer.opts=e}};for(n=0;n<s.length;n++)if(!((r=s[n])in o)){for(var i=r.split("."),p=i.pop(),l=o,c=0;c<i.length;c++)l=l[i[c]]||(l[i[c]]={});l[p]=function(e){if("init"!==e)return function(){o.__buffer.calls.push([e,Array.prototype.slice.call(arguments)])}}(r)}(c=document.createElement("script")).src=e,c.async=!0,a&&(c.crossOrigin="anonymous"),(i=document.getElementsByTagName("script")[0]).parentNode&&i.parentNode.insertBefore(c,i)}}("https://connect.facebook.net/en_US/sdk.js?hash=0c127a218da8595e39d571f6ba0a180b",1681536179,"FB",["AppEvents.EventNames","AppEvents.ParameterNames","AppEvents.activateApp","AppEvents.clearAppVersion","AppEvents.clearUserID","AppEvents.getAppVersion","AppEvents.getUserID","AppEvents.logEvent","AppEvents.logPageView","AppEvents.logPurchase","AppEvents.setAppVersion","AppEvents.setUserID","AppEvents.updateUserProperties","Canvas.Plugin.showPluginElement","Canvas.Plugin.hidePluginElement","Canvas.Prefetcher.addStaticResource","Canvas.Prefetcher.setCollectionMode","Canvas.getPageInfo","Canvas.scrollTo","Canvas.setAutoGrow","Canvas.setDoneLoading","Canvas.setSize","Canvas.setUrlHandler","Canvas.startTimer","Canvas.stopTimer","Event.subscribe","Event.unsubscribe","XFBML.parse","addFriend","api","getAccessToken","getAuthResponse","getLoginStatus","getUserID","init","login","logout","publish","share","ui"],!0);