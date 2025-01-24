import{ax as S,ay as A,az as v,aA as s,aB as r,aC as y,aD as U,aE as u,aF as L,aG as h,aH as k,U as T,i as O,aI as I,aJ as K,aK as R,aL as z,aM as p,c as D,aN as M}from"./index-Cy9-9n-w.js";const _=S`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var l=function(m,e,t,a){var o=arguments.length,i=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(m,e,t,a);else for(var c=m.length-1;c>=0;c--)(d=m[c])&&(i=(o<3?d(i):o>3?d(e,t,i):d(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const C="scroll-lock";let n=class extends A{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.enableEmbedded=v.state.enableEmbedded,this.open=s.state.open,this.caipAddress=r.state.activeCaipAddress,this.caipNetwork=r.state.activeCaipNetwork,this.shake=s.state.shake,this.initializeTheming(),y.prefetch(),this.unsubscribe.push(s.subscribeKey("open",e=>e?this.onOpen():this.onClose()),s.subscribeKey("shake",e=>this.shake=e),r.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),r.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),v.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e)),U.sendEvent({type:"track",event:"MODAL_LOADED"})}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){s.close();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?u`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?u`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return u` <wui-card
      shake="${this.shake}"
      data-embedded="${L(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){h.state.view==="UnsupportedChain"||await k.isSIWXCloseDisabled()?s.shake():s.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=M.state,a=T.getColorTheme(t);O(e,a)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),I.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=C,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${C}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",a=>{if(a.key==="Escape")this.handleClose();else if(a.key==="Tab"){const{tagName:o}=a.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAddress(e){const t=r.state.isSwitchingNamespace,a=K.getPlainAddress(e);!a&&!t?s.close():t&&a&&h.goBack(),await k.initializeIfEnabled(),this.caipAddress=e,r.setIsSwitchingNamespace(!1)}onNewNetwork(e){var w,b,f,g;y.prefetch();const t=(b=(w=this.caipNetwork)==null?void 0:w.caipNetworkId)==null?void 0:b.toString(),a=(f=e==null?void 0:e.caipNetworkId)==null?void 0:f.toString(),o=t&&a&&t!==a,i=r.state.isSwitchingNamespace,d=((g=this.caipNetwork)==null?void 0:g.name)===R.UNSUPPORTED_NETWORK_NAME,c=h.state.view==="ConnectingExternal",x=!this.caipAddress,N=o&&!d&&!i,E=h.state.view==="UnsupportedChain";!c&&(x||E||N)&&h.goBack(),this.caipNetwork=e}};n.styles=_;l([z({type:Boolean})],n.prototype,"enableEmbedded",void 0);l([p()],n.prototype,"open",void 0);l([p()],n.prototype,"caipAddress",void 0);l([p()],n.prototype,"caipNetwork",void 0);l([p()],n.prototype,"shake",void 0);n=l([D("w3m-modal")],n);export{n as W3mModal};
