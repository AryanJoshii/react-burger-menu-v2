import menuFactory from "../factories/menuFactory";
var styles = {
    menuWrap: function (isOpen) {
        return {
            MozTransform: isOpen ? '' : 'translate3d(0, -100%, 0)',
            MsTransform: isOpen ? '' : 'translate3d(0, -100%, 0)',
            OTransform: isOpen ? '' : 'translate3d(0, -100%, 0)',
            WebkitTransform: isOpen ? '' : 'translate3d(0, -100%, 0)',
            transform: isOpen ? '' : 'translate3d(0, -100%, 0)',
            transition: 'all 0.5s ease-in-out'
        };
    },
    pageWrap: function (isOpen, width, right) {
        return {
            MozTransform: isOpen
                ? ''
                : right
                    ? "translate3d(-".concat(width, ", 0, 0)")
                    : "translate3d(".concat(width, ", 0, 0)"),
            MsTransform: isOpen
                ? ''
                : right
                    ? "translate3d(-".concat(width, ", 0, 0)")
                    : "translate3d(".concat(width, ", 0, 0)"),
            OTransform: isOpen
                ? ''
                : right
                    ? "translate3d(-".concat(width, ", 0, 0)")
                    : "translate3d(".concat(width, ", 0, 0)"),
            WebkitTransform: isOpen
                ? ''
                : right
                    ? "translate3d(-".concat(width, ", 0, 0)")
                    : "translate3d(".concat(width, ", 0, 0)"),
            transform: isOpen
                ? ''
                : right
                    ? "translate3d(-".concat(width, ", 0, 0)")
                    : "translate3d(".concat(width, ", 0, 0)"),
            transition: 'all 0.5s'
        };
    },
    outerContainer: function (isOpen) {
        return {
            perspective: '1500px',
            perspectiveOrigin: '0% 50%',
            overflow: isOpen ? '' : 'hidden'
        };
    }
};
export default menuFactory(styles);