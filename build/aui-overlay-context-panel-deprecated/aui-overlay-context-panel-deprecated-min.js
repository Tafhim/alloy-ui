YUI.add("aui-overlay-context-panel-deprecated",function(e,t){var n=e.Lang,r=n.isBoolean,i=n.isString,s=n.isObject,o="align",u="anim",a="arrow",f="backgroundColor",l="",c="boundingBox",h="click",p="contentBox",d="overlaycontextpanel",v="default",m=".",g="end",y="hidden",b="inner",w="opacity",E="pointer",S="showArrow",x="state",T="style",N="visible",C="bc",k="bl",L="br",A="cc",O="lb",M="lc",_="lt",D="rb",P="rc",H="rl",B=e.getClassName,j=B(d),F=B(d,a,l),I=B(d,y),q=B(d,E),R=B(d,E,b),U=B(x,v),z='<div class="'+[U,q].join(" ")+'"></div>',W='<div class="'+R+'"></div>',X=e.Component.create({NAME:d,ATTRS:{anim:{lazyAdd:!1,value:{show:!1},setter:function(e){return this._setAnim(e)}},arrow:{value:null,validator:i},hideOn:{value:h},showOn:{value:h},showArrow:{lazyAdd:!1,value:!0,validator:r},stack:{lazyAdd:!1,value:!0,setter:function(e){return this._setStack(e)},validator:r}},EXTENDS:e.OverlayContext,prototype:{bindUI:function(){var e=this;e.after("showArrowChange",e._afterShowArrowChange),e.before("show",e._beforeShow),X.superclass.bindUI.apply(e,arguments)},renderUI:function(){var e=this;e._renderElements()},syncUI:function(){var e=this;X.superclass.syncUI.apply(e,arguments),e._syncElements()},align:function(e,t){var n=this;X.superclass.align.apply(this,arguments),n._syncElements()},fixPointerColor:function(){var e=this,t=e.get(p),n=t.one(m+R);n.removeAttribute(T);var r=t.getStyle(f),i="borderBottomColor",s=[m+F+D,m+F+P,m+F+H].join(","),o=[m+F+L,m+F+C,m+F+k].join(","),u=[m+F+O,m+F+M,m+F+_].join(",");t.test(s)?i="borderLeftColor":t.test(o)?i="borderTopColor":t.test(u)&&(i="borderRightColor"),n.setStyle(i,r)},getAlignPoint:function(){var e=this,t=e.get(o).points[0];return t==A&&(t=C),e.get(a)||t},hide:function(e){var t=this;if(t._hideAnim){var n=t.get(N);n&&(t._hideAnim.once(g,function(){X.superclass.hide.apply(t,arguments)}),t._hideAnim.run())}else X.superclass.hide.apply(t,arguments)},_renderElements:function(){var t=this,n=t.get(p),r=t.get(o),i=r.points[0];n.addClass(U),t._pointerNode=e.Node.create(z).append(W),n.append(t._pointerNode)},_syncElements:function(){var e=this,t=e.get(p),n=e._pointerNode,r=e.getAlignPoint();e.get(S)?(n.removeClass(I),t.removeClass(F+e._lastOverlayPoint),t.addClass(F+r),e.fixPointerColor()):n.addClass(I),e._lastOverlayPoint=r},_setStack:function(t){var n=this;return t?e.OverlayContextPanelManager.register(n):e.OverlayContextPanelManager.remove(n),t},_setAnim:function(t){var n=this,r=n.get(c);if(t){var i={node:r,duration:.1},o=e.merge(i,{from:{opacity:0},to:{opacity:1}}),u=e.merge(i,{from:{opacity:1},to:{opacity:0}});s(t)&&(o=e.merge(o,t.show),u=e.merge(u,t.hide)),n._showAnim=new e.Anim(o),n._hideAnim=new e.Anim(u),s(t)&&(t.show===!1&&(n._showAnim=null),t.hide===!1&&(n._hideAnim=null))}return t},_beforeShow:function(e){var t=this,n=t.get(c),r=t.get(N);!r&&t._showAnim?(n.setStyle(w,0),t._showAnim.run()):n.setStyle(w,1)},_afterShowArrowChange:function(){var e=this;e._syncElements()}}});e.OverlayContextPanel=X,e.OverlayContextPanelManager=new e.OverlayManager({zIndexBase:1e3})},"3.0.3-deprecated.63",{requires:["anim","aui-overlay-context-deprecated"],skinnable:!0});
