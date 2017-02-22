import Inferno from 'inferno';
import Component from 'inferno-component';
import { Motion, spring } from 'inferno-motion';

class Stuff extends Component {

  constructor(props) {

    super(props);
    
  }

  linkAs(key, attrs) { return  (
    (this.__cb4r3fs || (this.__cb4r3fs = new Map())).get(key) || this.__cb4r3fs.set(key, node => (
      this.refs[key] !== node && (this.refs = Object.assign({}, this.refs, { [key]: node })),
      node && Object.keys(attrs).forEach(attr => node.setAttributeNS(null, attr, attrs[attr]))
    )).get(key)
  )}

  render() {

    return (
      <Motion
        defaultStyle={{opacity: 0, transform: 0}}
        style={{opacity: spring(1), transform: spring(1)}}>
        {val => {

          let style = {...val, transform: `scale(${val.transform})`};

          return (
            <div style={style}>
              <div>ciaoo</div>
              <svg ref={ this.linkAs("Layer_1", {  }) } id="Layer_1" width={ 80 } height={ 80 } >
                <path ref={ this.linkAs('path0', { 'stroke-miterlimit': 10 }) } stroke="#000000" d="M32.99 32.833c0 2.853-.82 5.167-1.83 5.167-1.01 0-1.83-2.313-1.83-5.167v-8c0-2.853.82-5.167 1.83-5.167 1.012 0 1.83 2.313 1.83 5.167v8zM49.994 32.833c0 2.853-.82 5.167-1.83 5.167-1.01 0-1.83-2.313-1.83-5.167v-8c0-2.853.82-5.167 1.83-5.167 1.01 0 1.83 2.313 1.83 5.167v8zM67.417 46.083c0 4.004-12.275 15.25-27.417 15.25s-27.417-11.246-27.417-15.25 12.275 3.75 27.417 3.75 27.417-7.754 27.417-3.75z"  />
                <path fill="#FFFFFF" d="M32.99 48.318H47V57H32.99z"  />
                <path ref={ this.linkAs('path1', { 'stroke-miterlimit': 10 }) } stroke="#000000" d="M39.958 49.543h.084v7.182h-.084z"  />
              </svg>
            </div>
          )
        }}
      </Motion>
    );

  }

}

export default Stuff;

// svg to react components ---> https://theadd.github.io/svg2react/