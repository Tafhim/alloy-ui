if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-alert/aui-alert.js']) {
   __coverage__['build/aui-alert/aui-alert.js'] = {"path":"build/aui-alert/aui-alert.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":21},"end":{"line":1,"column":40}}},"2":{"name":"(anonymous_2)","line":43,"loc":{"start":{"line":43,"column":14},"end":{"line":43,"column":25}}},"3":{"name":"(anonymous_3)","line":59,"loc":{"start":{"line":59,"column":12},"end":{"line":59,"column":23}}},"4":{"name":"(anonymous_4)","line":71,"loc":{"start":{"line":71,"column":25},"end":{"line":71,"column":41}}},"5":{"name":"(anonymous_5)","line":84,"loc":{"start":{"line":84,"column":25},"end":{"line":84,"column":41}}},"6":{"name":"(anonymous_6)","line":101,"loc":{"start":{"line":101,"column":24},"end":{"line":101,"column":40}}},"7":{"name":"(anonymous_7)","line":111,"loc":{"start":{"line":111,"column":21},"end":{"line":111,"column":35}}},"8":{"name":"(anonymous_8)","line":159,"loc":{"start":{"line":159,"column":21},"end":{"line":159,"column":32}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":234,"column":3}},"2":{"start":{"line":9,"column":0},"end":{"line":12,"column":59}},"3":{"start":{"line":28,"column":0},"end":{"line":220,"column":3}},"4":{"start":{"line":44,"column":8},"end":{"line":44,"column":52}},"5":{"start":{"line":46,"column":8},"end":{"line":50,"column":9}},"6":{"start":{"line":47,"column":12},"end":{"line":47,"column":37}},"7":{"start":{"line":49,"column":12},"end":{"line":49,"column":77}},"8":{"start":{"line":60,"column":8},"end":{"line":60,"column":60}},"9":{"start":{"line":61,"column":8},"end":{"line":61,"column":62}},"10":{"start":{"line":72,"column":8},"end":{"line":74,"column":9}},"11":{"start":{"line":73,"column":12},"end":{"line":73,"column":44}},"12":{"start":{"line":85,"column":8},"end":{"line":91,"column":9}},"13":{"start":{"line":86,"column":12},"end":{"line":86,"column":24}},"14":{"start":{"line":88,"column":12},"end":{"line":90,"column":13}},"15":{"start":{"line":89,"column":16},"end":{"line":89,"column":80}},"16":{"start":{"line":102,"column":8},"end":{"line":102,"column":43}},"17":{"start":{"line":112,"column":8},"end":{"line":113,"column":54}},"18":{"start":{"line":115,"column":8},"end":{"line":115,"column":54}},"19":{"start":{"line":117,"column":8},"end":{"line":117,"column":31}},"20":{"start":{"line":119,"column":8},"end":{"line":121,"column":9}},"21":{"start":{"line":120,"column":12},"end":{"line":120,"column":39}},"22":{"start":{"line":123,"column":8},"end":{"line":126,"column":9}},"23":{"start":{"line":124,"column":12},"end":{"line":124,"column":49}},"24":{"start":{"line":125,"column":12},"end":{"line":125,"column":88}},"25":{"start":{"line":160,"column":16},"end":{"line":160,"column":87}}},"branchMap":{"1":{"line":46,"type":"if","locations":[{"start":{"line":46,"column":8},"end":{"line":46,"column":8}},{"start":{"line":46,"column":8},"end":{"line":46,"column":8}}]},"2":{"line":72,"type":"if","locations":[{"start":{"line":72,"column":8},"end":{"line":72,"column":8}},{"start":{"line":72,"column":8},"end":{"line":72,"column":8}}]},"3":{"line":72,"type":"binary-expr","locations":[{"start":{"line":72,"column":12},"end":{"line":72,"column":25}},{"start":{"line":72,"column":29},"end":{"line":72,"column":54}}]},"4":{"line":85,"type":"if","locations":[{"start":{"line":85,"column":8},"end":{"line":85,"column":8}},{"start":{"line":85,"column":8},"end":{"line":85,"column":8}}]},"5":{"line":88,"type":"if","locations":[{"start":{"line":88,"column":12},"end":{"line":88,"column":12}},{"start":{"line":88,"column":12},"end":{"line":88,"column":12}}]},"6":{"line":88,"type":"binary-expr","locations":[{"start":{"line":88,"column":16},"end":{"line":88,"column":35}},{"start":{"line":88,"column":39},"end":{"line":88,"column":65}}]},"7":{"line":119,"type":"if","locations":[{"start":{"line":119,"column":8},"end":{"line":119,"column":8}},{"start":{"line":119,"column":8},"end":{"line":119,"column":8}}]},"8":{"line":123,"type":"if","locations":[{"start":{"line":123,"column":8},"end":{"line":123,"column":8}},{"start":{"line":123,"column":8},"end":{"line":123,"column":8}}]}},"code":["(function () { YUI.add('aui-alert', function (A, NAME) {","","/**"," * The Alert Component"," *"," * @module aui-alert"," */","","var getClassName = A.getClassName,","    CSS_CLOSE = getClassName('close'),","    CSS_INFO = getClassName('alert', 'info'),","    CSS_DISMISSABLE = getClassName('alert', 'dismissable');","","/**"," * A base class for Alert."," *"," * Check the [live demo](http://alloyui.com/examples/alert/)."," *"," * @class A.Alert"," * @extends Widget"," * @uses A.WidgetCssClass, A.WidgetTransition"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," * @include http://alloyui.com/examples/alert/basic-markup.html"," * @include http://alloyui.com/examples/alert/basic.js"," */","A.Alert = A.Base.create('alert', A.Widget, [","    A.WidgetCssClass,","    A.WidgetStdMod,","    A.WidgetTransition","], {","    CONTENT_TEMPLATE: null,","","    _eventHandle: null,","","    /**","     * Renders the Alert component instance. Lifecycle.","     *","     * @method renderUI","     * @protected","     */","    renderUI: function() {","        this._uiSetCloseable(this.get('closeable'));","","        if (this.get('useARIA')) {","            this.plug(A.Plugin.Aria);","","            this.aria.setAttribute('hidden', false, this.get('boundingBox'));","        }","    },","","    /**","     * Binds the events on the Alert UI. Lifecycle.","     *","     * @method bindUI","     * @protected","     */","    bindUI: function() {","        this.on('closeableChange', this._onCloseableChange);","        this.after('visibleChange', this._afterVisibleChange);","    },","","    /**","     * Fires after visibility changes.","     *","     * @method _afterVisibleChange","     * @param {EventFacade} event","     * @protected","     */","    _afterVisibleChange: function(event) {","        if (!event.newVal && this.get('destroyOnHide')) {","            A.soon(A.bind('destroy', this));","        }","    },","","    /**","     * Handles close icon click event.","     *","     * @method _onClickBoundingBox","     * @param {EventFacade} event","     * @protected","     */","    _onClickBoundingBox: function(event) {","        if (event.target.test('.' + CSS_CLOSE)) {","            this.hide();","","            if (this.get('useARIA') && !this.get('destroyOnHide')) {","                this.aria.setAttribute('hidden', true, this.get('boundingBox'));","            }","        }","    },","","    /**","     * Handles `closeable` events.","     *","     * @method _onCloseableChange","     * @param {EventFacade} event","     * @protected","     */","    _onCloseableChange: function(event) {","        this._uiSetCloseable(event.newVal);","    },","","    /**","     * Sets `closeable` UI.","     *","     * @method _uiSetCloseable","     * @protected","     */","    _uiSetCloseable: function(val) {","        var boundingBox = this.get('boundingBox'),","            closeableNode = this.get('closeableNode');","","        boundingBox.toggleClass(CSS_DISMISSABLE, val);","","        closeableNode.remove();","","        if (this._eventHandle) {","            this._eventHandle.detach();","        }","","        if (val) {","            boundingBox.insert(closeableNode, 0);","            this._eventHandle = boundingBox.on('click', this._onClickBoundingBox, this);","        }","    }","}, {","","    /**","     * Static property used to define the default attribute","     * configuration for the Alert.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","        /**","         * Whether the alert can be closed.","         *","         * @attribute closeable","         * @default true","         * @type {Boolean}","         */","        closeable: {","            validator: A.Lang.isBoolean,","            value: true","        },","","        /**","         * Node used to generate a close button.","         *","         * @attribute closeableNode","         * @default `<button type=\"button\" class=\"close\">×</button>`","         * @type {Node}","         */","        closeableNode: {","            valueFn: function() {","                return A.Node.create('<button type=\"button\" class=\"close\">×</button>');","            }","        },","","        /**","         * CSS class for alert.","         *","         * @attribute popoverCssClass","         * @default A.getClassName('alert-info')","         * @type {String}","         */","        cssClass: {","            value: CSS_INFO","        },","","        /**","         * Determine if Alert should be destroyed when hidden.","         *","         * @attribute destroyOnHide","         * @default false","         * @type Boolean","         */","        destroyOnHide: {","            validator: A.Lang.isBoolean,","            value: false","        },","","        /**","        * Boolean indicating if use of the WAI-ARIA Roles and States should be enabled..","        *","        * @attribute useARIA","        * @default true","        * @type {Boolean}","        */","        useARIA: {","            validator: A.Lang.isBoolean,","            value: true,","            writeOnce: 'initOnly'","        }","    },","","    /**","     * Static property provides a string to identify the CSS prefix.","     *","     * @property CSS_PREFIX","     * @type {String}","     * @static","     */","    CSS_PREFIX: 'alert',","","    /**","     * Object hash, defining how closeableNode value have to be parsed from markup.","     *","     * @property HTML_PARSER","     * @type Object","     * @static","     */","    HTML_PARSER: {","        closeableNode: '.' + CSS_CLOSE","    }","});","","","}, '3.1.0-deprecated.38', {","    \"requires\": [","        \"aui-aria\",","        \"aui-classnamemanager\",","        \"aui-widget-cssclass\",","        \"aui-widget-transition\",","        \"timers\",","        \"widget\",","        \"widget-stdmod\"","    ],","    \"skinnable\": true","});","","}());"]};
}
var __cov_4PBfiDi4ZbhKFZ2to3MtXQ = __coverage__['build/aui-alert/aui-alert.js'];
__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['1']++;YUI.add('aui-alert',function(A,NAME){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.f['1']++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['2']++;var getClassName=A.getClassName,CSS_CLOSE=getClassName('close'),CSS_INFO=getClassName('alert','info'),CSS_DISMISSABLE=getClassName('alert','dismissable');__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['3']++;A.Alert=A.Base.create('alert',A.Widget,[A.WidgetCssClass,A.WidgetStdMod,A.WidgetTransition],{CONTENT_TEMPLATE:null,_eventHandle:null,renderUI:function(){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.f['2']++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['4']++;this._uiSetCloseable(this.get('closeable'));__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['5']++;if(this.get('useARIA')){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['1'][0]++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['6']++;this.plug(A.Plugin.Aria);__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['7']++;this.aria.setAttribute('hidden',false,this.get('boundingBox'));}else{__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['1'][1]++;}},bindUI:function(){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.f['3']++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['8']++;this.on('closeableChange',this._onCloseableChange);__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['9']++;this.after('visibleChange',this._afterVisibleChange);},_afterVisibleChange:function(event){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.f['4']++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['10']++;if((__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['3'][0]++,!event.newVal)&&(__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['3'][1]++,this.get('destroyOnHide'))){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['2'][0]++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['11']++;A.soon(A.bind('destroy',this));}else{__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['2'][1]++;}},_onClickBoundingBox:function(event){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.f['5']++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['12']++;if(event.target.test('.'+CSS_CLOSE)){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['4'][0]++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['13']++;this.hide();__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['14']++;if((__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['6'][0]++,this.get('useARIA'))&&(__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['6'][1]++,!this.get('destroyOnHide'))){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['5'][0]++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['15']++;this.aria.setAttribute('hidden',true,this.get('boundingBox'));}else{__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['5'][1]++;}}else{__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['4'][1]++;}},_onCloseableChange:function(event){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.f['6']++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['16']++;this._uiSetCloseable(event.newVal);},_uiSetCloseable:function(val){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.f['7']++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['17']++;var boundingBox=this.get('boundingBox'),closeableNode=this.get('closeableNode');__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['18']++;boundingBox.toggleClass(CSS_DISMISSABLE,val);__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['19']++;closeableNode.remove();__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['20']++;if(this._eventHandle){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['7'][0]++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['21']++;this._eventHandle.detach();}else{__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['7'][1]++;}__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['22']++;if(val){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['8'][0]++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['23']++;boundingBox.insert(closeableNode,0);__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['24']++;this._eventHandle=boundingBox.on('click',this._onClickBoundingBox,this);}else{__cov_4PBfiDi4ZbhKFZ2to3MtXQ.b['8'][1]++;}}},{ATTRS:{closeable:{validator:A.Lang.isBoolean,value:true},closeableNode:{valueFn:function(){__cov_4PBfiDi4ZbhKFZ2to3MtXQ.f['8']++;__cov_4PBfiDi4ZbhKFZ2to3MtXQ.s['25']++;return A.Node.create('<button type="button" class="close">\xd7</button>');}},cssClass:{value:CSS_INFO},destroyOnHide:{validator:A.Lang.isBoolean,value:false},useARIA:{validator:A.Lang.isBoolean,value:true,writeOnce:'initOnly'}},CSS_PREFIX:'alert',HTML_PARSER:{closeableNode:'.'+CSS_CLOSE}});},'3.1.0-deprecated.38',{'requires':['aui-aria','aui-classnamemanager','aui-widget-cssclass','aui-widget-transition','timers','widget','widget-stdmod'],'skinnable':true});
