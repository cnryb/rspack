/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
const r = /^(?:[A-Za-z]:[\\/]|\\\\|\/)/;
function e(
	t,
	{
		instancePath: o = "",
		parentData: a,
		parentDataProperty: i,
		rootData: n = t
	} = {}
) {
	if (!t || "object" != typeof t || Array.isArray(t))
		return (e.errors = [{ params: { type: "object" } }]), !1;
	if (void 0 !== t.debug) {
		const r = 0;
		if ("boolean" != typeof t.debug)
			return (e.errors = [{ params: { type: "boolean" } }]), !1;
		var s = 0 === r;
	} else s = !0;
	if (s) {
		if (void 0 !== t.minimize) {
			const r = 0;
			if ("boolean" != typeof t.minimize)
				return (e.errors = [{ params: { type: "boolean" } }]), !1;
			s = 0 === r;
		} else s = !0;
		if (s)
			if (void 0 !== t.options) {
				let o = t.options;
				const a = 0;
				if (0 === a) {
					if (!o || "object" != typeof o || Array.isArray(o))
						return (e.errors = [{ params: { type: "object" } }]), !1;
					if (void 0 !== o.context) {
						let t = o.context;
						if ("string" != typeof t)
							return (e.errors = [{ params: { type: "string" } }]), !1;
						if (t.includes("!") || !0 !== r.test(t))
							return (e.errors = [{ params: {} }]), !1;
					}
				}
				s = 0 === a;
			} else s = !0;
	}
	return (e.errors = null), !0;
}
(module.exports = e), (module.exports.default = e);