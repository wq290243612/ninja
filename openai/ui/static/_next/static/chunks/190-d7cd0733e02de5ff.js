"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[190], {
    91809: function(e, n, r) {
        r.d(n, {
            Z: function() {
                return a
            }
        });
        var t = r(35250),
            i = r(19841);
        function a(e) {
            var n = e.url,
                r = e.name,
                a = e.size,
                s = e.large,
                o = e.className;
            return (0, t.jsxs)("div", {
                className: (0, i.Z)("relative", o),
                style: {
                    width: a,
                    height: a
                },
                children: [(0, t.jsx)("img", {
                    src: n,
                    alt: "".concat(r, " logo"),
                    className: (0, i.Z)("h-full w-full bg-white", s ? "rounded-[5px]" : "rounded-sm")
                }), (0, t.jsx)("div", {
                    className: (0, i.Z)("absolute inset-0 ring-1 ring-inset ring-black/10", s ? "rounded-[5px]" : "rounded-sm")
                })]
            })
        }
    },
    6038: function(e, n, r) {
        r.d(n, {
            B0: function() {
                return z
            },
            Ph: function() {
                return Z
            },
            k$: function() {
                return N
            },
            zf: function() {
                return T
            }
        });
        var t = r(4337),
            i = r(35250),
            a = r(19841),
            s = r(19579),
            o = r.n(s),
            l = r(1454),
            d = r(13002),
            c = r(70671),
            u = r(94968),
            f = r(21389),
            h = r(62509),
            x = r(32877),
            v = r(78931),
            m = r(91809),
            g = r(88327);
        function b() {
            var e = (0, t._)(["relative p-1 ", " text-white flex items-center justify-center"]);
            return b = function() {
                return e
            }, e
        }
        function p() {
            var e = (0, t._)(["\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ", "\n  ", "\n"]);
            return p = function() {
                return e
            }, e
        }
        function j() {
            var e = (0, t._)(["text-white flex justify-center items-center relative tracking-widest"]);
            return j = function() {
                return e
            }, e
        }
        function k() {
            var e = (0, t._)(["relative flex"]);
            return k = function() {
                return e
            }, e
        }
        var w = f.Z.div(b(), function(e) {
                return e.$isMessageRedesign ? "rounded-full h-7 w-7" : "rounded-sm h-[30px] w-[30px]"
            }),
            y = f.Z.span(p(), function(e) {
                return "warning" === e.$type && "bg-orange-500 text-white"
            }, function(e) {
                return "danger" === e.$type && "bg-red-500 text-white"
            }),
            N = function(e) {
                var n = e.iconName,
                    r = e.background,
                    t = e.notice,
                    a = (0, v.hz)().has(x.FZ),
                    s = g.nI;
                switch (n) {
                case "globe":
                    s = l.RsK;
                    break;
                case "terminal":
                    s = l.cDN;
                    break;
                case "text":
                    s = l.RUS;
                    break;
                case "browsing":
                    s = l.jRj;
                    break;
                case "code":
                    s = d.oT$;
                    break;
                case "plugin":
                    s = l.yG;
                    break;
                case "user":
                    s = l.fzv
                }
                return (0, i.jsxs)(w, {
                    $isMessageRedesign: a,
                    style: {
                        backgroundColor: r
                    },
                    children: [(0, i.jsx)(g.ZP, {
                        icon: s,
                        size: "medium",
                        className: a ? "!h-5 !w-5" : ""
                    }), t && (0, i.jsx)(y, {
                        $type: t,
                        children: "!"
                    })]
                })
            },
            Z = function(e) {
                var n = e.plugin,
                    r = e.notice,
                    t = (0, v.hz)().has(x.FZ);
                return (0, i.jsxs)(w, {
                    $isMessageRedesign: t,
                    className: "p-0",
                    children: [(0, i.jsx)(m.Z, {
                        url: n.manifest.logo_url,
                        name: n.manifest.name_for_human,
                        size: "100%"
                    }), r && (0, i.jsx)(y, {
                        $type: r,
                        children: "!"
                    })]
                })
            },
            _ = f.Z.div(j()),
            S = f.Z.div(k()),
            M = {
                small: 20,
                redesign: 28,
                medium: 38,
                large: 48
            },
            C = {
                small: "small",
                redesign: "small",
                medium: "medium",
                large: "medium"
            },
            P = function(e) {
                var n,
                    r = e.user,
                    t = e.size,
                    s = e.notice,
                    d = e.rounded,
                    c = s && (0, i.jsx)(y, {
                        $type: s,
                        children: "!"
                    }),
                    u = (0, v.hz)().has(x.FZ);
                if ((null == r ? void 0 : r.picture) != null)
                    return (0, i.jsxs)(S, {
                        children: [(0, i.jsx)(o(), {
                            src: r.picture,
                            alt: "User",
                            width: M[t],
                            height: M[t],
                            className: u || void 0 !== d && d ? "rounded-full" : "rounded-sm"
                        }), c]
                    });
                var f = (null !== (n = null == r ? void 0 : r.name) && void 0 !== n ? n : "").split(" ").map(function(e) {
                    return e[0]
                }).join("");
                return (0, i.jsxs)(_, {
                    className: (0, a.Z)("bg-blue-300", "redesign" === t ? "h-7 w-7 text-xs" : "small" === t ? "h-5 w-5 text-xs" : "h-[30px] w-[30px] text-sm", u ? "rounded-full" : "rounded-sm"),
                    children: [f || (0, i.jsx)(g.ZP, {
                        icon: l.fzv,
                        size: C[t]
                    }), c]
                })
            };
        function z(e) {
            var n = e.size,
                r = void 0 === n ? "medium" : n,
                t = (0, c.Z)();
            return (0, i.jsx)(S, {
                children: (0, i.jsx)(o(), {
                    src: "/images/office-building-24x24.svg",
                    alt: t.formatMessage(A.workspaceAvatarAlt),
                    width: M[r],
                    height: M[r],
                    className: (0, a.Z)("medium" === r && "rounded-sm", "large" === r && "rounded")
                })
            })
        }
        function T(e) {
            var n = e.className,
                r = e.iconSize,
                t = void 0 === r ? "medium" : r,
                s = e.notice,
                o = (0, v.ec)(function(e) {
                    return e.currentWorkspace
                }),
                l = (0, v.ec)(v.F_.isPersonalWorkspace),
                d = (0, h.kP)().session;
            return !o || l && (null == d ? void 0 : d.user) !== void 0 ? (0, i.jsx)(P, {
                user: null == d ? void 0 : d.user,
                size: t,
                notice: s
            }) : (0, i.jsxs)("div", {
                className: (0, a.Z)("flex items-center justify-center rounded", n),
                children: [(0, i.jsx)(z, {
                    size: t
                }), s && (0, i.jsx)(y, {
                    $type: s,
                    children: "!"
                })]
            })
        }
        var A = (0, u.vU)({
            workspaceAvatarAlt: {
                id: "Avatar.workspaceAvatarAlt",
                defaultMessage: "Avatar of an office building",
                description: "Alt text for workspace avatar"
            }
        })
    },
    50744: function(e, n, r) {
        var t = r(35250),
            i = r(55344),
            a = r.n(i);
        r(70079);
        var s = function(e) {
            var n = e.children;
            return (0, t.jsx)(t.Fragment, {
                children: n
            })
        };
        n.Z = a()(function() {
            return Promise.resolve(s)
        }, {
            ssr: !1
        })
    },
    63857: function(e, n, r) {
        r.d(n, {
            Z: function() {
                return h
            }
        });
        var t = r(4337),
            i = r(35250),
            a = r(95182),
            s = r.n(a),
            o = r(1454),
            l = r(21389),
            d = r(88327);
        function c() {
            var e = (0, t._)(["text-xs flex items-center justify-center gap-1"]);
            return c = function() {
                return e
            }, e
        }
        function u() {
            var e = (0, t._)(["dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"]);
            return u = function() {
                return e
            }, e
        }
        function f() {
            var e = (0, t._)(["flex-grow flex-shrink-0"]);
            return f = function() {
                return e
            }, e
        }
        function h(e) {
            var n = e.currentPage,
                r = e.onChangeIndex,
                t = e.length,
                a = e.className,
                l = function(e) {
                    r(s()(n + e, 0, t - 1))
                };
            return (0, i.jsxs)(x, {
                className: a,
                children: [(0, i.jsx)(v, {
                    onClick: function() {
                        return l(-1)
                    },
                    disabled: 0 === n,
                    children: (0, i.jsx)(d.ZP, {
                        size: "xsmall",
                        icon: o.YFh
                    })
                }), (0, i.jsx)(m, {
                    children: "".concat(n + 1, " / ").concat(t)
                }), (0, i.jsx)(v, {
                    onClick: function() {
                        return l(1)
                    },
                    disabled: n === t - 1,
                    children: (0, i.jsx)(d.ZP, {
                        size: "xsmall",
                        icon: o.Tfp
                    })
                })]
            })
        }
        var x = l.Z.div(c()),
            v = l.Z.button(u()),
            m = l.Z.span(f())
    },
    82277: function(e, n, r) {
        r.d(n, {
            Z: function() {
                return h
            }
        });
        var t = r(4337),
            i = r(35250),
            a = r(70079),
            s = r(21389),
            o = r(46020),
            l = r(33669),
            d = r(50744),
            c = r(13090);
        function u() {
            var e = (0, t._)(["overflow-hidden w-full h-full relative flex z-0"]);
            return u = function() {
                return e
            }, e
        }
        function f() {
            var e = (0, t._)(["relative h-full w-full transition-width flex flex-col overflow-auto items-stretch"]);
            return f = function() {
                return e
            }, e
        }
        function h(e) {
            var n = e.children,
                r = e.showNavigation,
                t = e.renderTitle,
                s = e.renderMobileHeaderRightContent,
                u = e.renderSidebar,
                f = (0, l.w$)(),
                m = [],
                g = null;
            return a.Children.forEach(n, function(e) {
                a.isValidElement(e) && (e.type === h.Sidebars ? g = e : m.push(e))
            }), (0, i.jsxs)(x, {
                children: [f && r && (0, i.jsx)(d.Z, {
                    children: (0, i.jsx)(c.l6, {
                        children: u
                    })
                }), (0, i.jsxs)("div", {
                    className: "relative flex h-full max-w-full flex-1 overflow-hidden",
                    children: [(0, i.jsxs)("div", {
                        className: "flex h-full max-w-full flex-1 flex-col",
                        children: [!f && r && (0, i.jsx)(d.Z, {
                            children: (0, i.jsx)(c.Vs, {
                                onClickOpenSidebar: function() {
                                    return o.vm.toggleActiveSidebar("mobile-nav")
                                },
                                renderTitle: t,
                                renderSidebar: u,
                                renderRightContent: s
                            })
                        }), (0, i.jsx)(v, {
                            className: "flex-1",
                            children: m
                        })]
                    }), g]
                })]
            })
        }
        var x = s.Z.div(u()),
            v = s.Z.main(f());
        h.Sidebars = function(e) {
            var n = e.children;
            return (0, i.jsx)(i.Fragment, {
                children: n
            })
        }
    },
    13090: function(e, n, r) {
        r.d(n, {
            H: function() {
                return N
            },
            MP: function() {
                return w
            },
            Vs: function() {
                return _
            },
            js: function() {
                return y
            },
            l6: function() {
                return S
            }
        });
        var t = r(39324),
            i = r(70216),
            a = r(35250),
            s = r(98359),
            o = r(20525),
            l = r(32148),
            d = r(97296),
            c = r(70737),
            u = r(70079),
            f = r(1454),
            h = r(70671),
            x = r(32004),
            v = r(94968),
            m = r(46020),
            g = r(33669),
            b = r(45635),
            p = r(88327),
            j = r(15329),
            k = r(92160);
        function w(e) {
            var n = e.onClick,
                r = (0, i._)(e, ["onClick"]);
            return (0, a.jsx)(j.zV, (0, t._)({
                onClick: n,
                className: "flex-shrink-0 flex-grow"
            }, r))
        }
        function y(e) {
            var n = e.onClick,
                r = (0, i._)(e, ["onClick"]);
            return (0, a.jsx)("button", (0, t._)({
                type: "button",
                className: "px-3",
                onClick: n
            }, r))
        }
        function N() {
            var e = (0, h.Z)();
            return (0, g.w$)() ? (0, a.jsx)(b.u, {
                side: "right",
                label: e.formatMessage(M.closeSidebar),
                children: (0, a.jsxs)(j.zV, {
                    onClick: m.vm.toggleDesktopNavCollapsed,
                    className: "w-11 flex-shrink-0 items-center justify-center",
                    children: [(0, a.jsx)(p.ZP, {
                        icon: f.iYc
                    }), (0, a.jsx)(l.f, {
                        children: (0, a.jsx)(x.Z, (0, t._)({}, M.closeSidebar))
                    })]
                })
            }) : null
        }
        var Z = function(e) {
                var n = e.onClose,
                    r = e.sidebarOpen,
                    i = e.children;
                return (0, a.jsx)(s.u.Root, {
                    show: r,
                    as: u.Fragment,
                    children: (0, a.jsxs)(o.V, {
                        as: "div",
                        className: "relative",
                        onClose: n,
                        children: [(0, a.jsx)(s.u.Child, {
                            as: u.Fragment,
                            enter: "transition-opacity ease-linear duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "transition-opacity ease-linear duration-300",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, a.jsx)("div", {
                                className: "fixed inset-0 bg-gray-600 bg-opacity-75"
                            })
                        }), (0, a.jsxs)("div", {
                            className: "fixed inset-0 flex",
                            children: [(0, a.jsx)(s.u.Child, {
                                as: u.Fragment,
                                enter: "transition ease-in-out duration-300 transform",
                                enterFrom: "-translate-x-full",
                                enterTo: "translate-x-0",
                                leave: "transition ease-in-out duration-300 transform",
                                leaveFrom: "translate-x-0",
                                leaveTo: "-translate-x-full",
                                children: (0, a.jsxs)(o.V.Panel, {
                                    className: "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
                                    children: [(0, a.jsx)(s.u.Child, {
                                        as: u.Fragment,
                                        enter: "ease-in-out duration-300",
                                        enterFrom: "opacity-0",
                                        enterTo: "opacity-100",
                                        leave: "ease-in-out duration-300",
                                        leaveFrom: "opacity-100",
                                        leaveTo: "opacity-0",
                                        children: (0, a.jsx)("div", {
                                            className: "absolute right-0 top-0 -mr-12 pt-2",
                                            children: (0, a.jsxs)("button", {
                                                type: "button",
                                                className: "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                                onClick: n,
                                                children: [(0, a.jsx)("span", {
                                                    className: "sr-only",
                                                    children: (0, a.jsx)(x.Z, (0, t._)({}, M.closeSidebar))
                                                }), (0, a.jsx)(p.ZP, {
                                                    icon: f.q5L,
                                                    size: "medium",
                                                    className: "text-white",
                                                    "aria-hidden": "true"
                                                })]
                                            })
                                        })
                                    }), i]
                                })
                            }), (0, a.jsx)("div", {
                                className: "w-14 flex-shrink-0"
                            })]
                        })]
                    })
                })
            },
            _ = function(e) {
                var n = e.onClickOpenSidebar,
                    r = e.renderTitle,
                    i = e.renderSidebar,
                    s = e.renderRightContent,
                    o = (0, m.tN)(function(e) {
                        return e.activeSidebar
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
                        children: [(0, a.jsxs)("button", {
                            type: "button",
                            className: "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
                            onClick: n,
                            children: [(0, a.jsx)("span", {
                                className: "sr-only",
                                children: (0, a.jsx)(x.Z, (0, t._)({}, M.openSidebar))
                            }), (0, a.jsx)(p.ZP, {
                                icon: f.cur,
                                "aria-hidden": "true",
                                size: "medium"
                            })]
                        }), (0, a.jsx)("h1", {
                            className: "flex-1 text-center text-base font-normal",
                            children: r
                        }), s]
                    }), (0, a.jsx)(Z, {
                        onClose: function() {
                            m.vm.setActiveSidebar(!1)
                        },
                        sidebarOpen: "mobile-nav" === o,
                        children: i
                    })]
                })
            };
        function S(e) {
            var n = e.children,
                r = (0, h.Z)(),
                t = (0, u.useRef)(null),
                i = (0, m.tN)(function(e) {
                    return e.isDesktopNavCollapsed
                });
            return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(d.E.div, {
                    className: "dark flex-shrink-0 overflow-x-hidden bg-gray-900",
                    ref: t,
                    initial: !1,
                    animate: {
                        width: i ? 0 : "260px",
                        transition: {
                            duration: .165,
                            ease: "easeOut"
                        }
                    },
                    onAnimationStart: function() {
                        t.current && (t.current.style.visibility = "visible")
                    },
                    onAnimationComplete: function() {
                        t.current && i && (t.current.style.visibility = "hidden")
                    },
                    children: (0, a.jsx)("div", {
                        className: "h-full w-[260px]",
                        children: (0, a.jsx)("div", {
                            className: "flex h-full min-h-0 flex-col ",
                            children: n
                        })
                    })
                }), (0, a.jsx)(c.M, {
                    initial: !1,
                    children: i && (0, a.jsx)(d.E.div, {
                        className: "absolute left-2 top-2 z-10 hidden md:inline-block",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1,
                            transition: {
                                duration: .165,
                                ease: "easeIn"
                            }
                        },
                        children: (0, a.jsx)(b.u, {
                            side: "right",
                            label: r.formatMessage(M.openSidebar),
                            children: (0, a.jsx)(k.O, {
                                onClick: m.vm.toggleDesktopNavCollapsed,
                                "aria-label": r.formatMessage(M.openSidebar),
                                children: (0, a.jsx)(p.ZP, {
                                    className: "text-black dark:text-white",
                                    icon: f.iYc
                                })
                            })
                        })
                    })
                })]
            })
        }
        var M = (0, v.vU)({
            closeSidebar: {
                id: "navigation.closeSidebar",
                defaultMessage: "Close sidebar",
                description: "Close sidebar button label"
            },
            openSidebar: {
                id: "navigation.openSidebar",
                defaultMessage: "Open sidebar",
                description: "Open sidebar button label"
            }
        })
    },
    92160: function(e, n, r) {
        r.d(n, {
            O: function() {
                return b
            },
            Z: function() {
                return g
            }
        });
        var t = r(4337),
            i = r(35250),
            a = r(70079),
            s = r(1454),
            o = r(94968),
            l = r(70671),
            d = r(21389),
            c = r(46020),
            u = r(78931),
            f = r(32542),
            h = r(45635),
            x = r(88327);
        function v() {
            var e = (0, t._)(["flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border bg-white dark:bg-gray-800 border-black/10 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-gray-700 h-11"]);
            return v = function() {
                return e
            }, e
        }
        var m = (0, o.vU)({
            openDebug: {
                defaultMessage: "Open debug sidebar",
                id: "Stage.openDebug",
                description: "Open debug sidebar button tooltip"
            }
        });
        function g() {
            var e = (0, a.useContext)(f.gB),
                n = (0, l.Z)(),
                r = (0, c.tN)(function(e) {
                    return "debug" === e.activeSidebar
                }),
                t = (0, u.hz)().has("debug") && !r;
            return e ? null : t ? (0, i.jsx)("div", {
                className: "absolute right-4 top-2 z-10 hidden md:block",
                children: (0, i.jsx)(h.u, {
                    side: "left",
                    label: n.formatMessage(m.openDebug),
                    children: (0, i.jsx)(b, {
                        onClick: function() {
                            return c.vm.toggleActiveSidebar("debug")
                        },
                        "aria-label": n.formatMessage(m.openDebug),
                        children: (0, i.jsx)(x.ZP, {
                            className: "text-black dark:text-white",
                            icon: s.cDN
                        })
                    })
                })
            }) : null
        }
        var b = d.Z.button(v())
    },
    52696: function(e, n, r) {
        r.d(n, {
            Ap: function() {
                return c
            },
            Ix: function() {
                return f
            },
            _O: function() {
                return h
            },
            bE: function() {
                return x
            },
            qH: function() {
                return u
            }
        });
        var t = r(96237),
            i = r(70079),
            a = r(70671),
            s = r(94968),
            o = r(62509),
            l = r(75641),
            d = r(78931);
        function c() {
            var e = (0, a.Z)(),
                n = e.formatMessage(v.adminRoleName),
                r = e.formatMessage(v.standardRoleName);
            return (0, i.useMemo)(function() {
                var e;
                return e = {}, (0, t._)(e, l.r3.ADMIN, n), (0, t._)(e, l.r3.STANDARD, r), e
            }, [n, r])
        }
        function u(e) {
            var n = (0, a.Z)();
            return e ? "personal" === e.structure ? n.formatMessage(v.personalPlanName) : n.formatMessage(v.businessPlanName) : n.formatMessage(v.personalPlanName)
        }
        function f(e) {
            var n,
                r,
                t,
                i,
                s,
                l,
                c = (0, o.kP)().session,
                u = (0, d.ec)(function(e) {
                    return e.currentWorkspace
                }),
                f = (0, d.ec)(d.F_.isPersonalWorkspace),
                h = (0, d.$T)(),
                x = (r = (0, a.Z)(), null !== (n = null == u ? void 0 : u.name) && void 0 !== n ? n : r.formatMessage(v.defaultWorkspaceTitle)),
                m = null !== (l = null !== (s = null == c ? void 0 : null === (t = c.user) || void 0 === t ? void 0 : t.name) && void 0 !== s ? s : null == c ? void 0 : null === (i = c.user) || void 0 === i ? void 0 : i.email) && void 0 !== l ? l : null;
            return e && !h ? "personal" === e.structure ? m : e.name : u ? f ? m : x : m
        }
        function h() {
            return (0, d.ec)(function(e) {
                return e.workspaces
            })
        }
        function x(e) {
            var n = h().find(function(n) {
                return n.id === e
            });
            return !!n && n.role === l.r3.ADMIN
        }
        var v = (0, s.vU)({
            defaultWorkspaceTitle: {
                id: "useWorkspaces.defaultWorkspaceTitle",
                defaultMessage: "Untitled Workspace",
                description: "title for workspace without a name"
            },
            personalPlanName: {
                id: "useWorkspaces.personalPlanName",
                defaultMessage: "Personal",
                description: "label for personal tier account"
            },
            businessPlanName: {
                id: "useWorkspaces.businessPlanName",
                defaultMessage: "Business",
                description: "label for business tier account"
            },
            adminRoleName: {
                id: "useWorkspaces.adminRoleName",
                defaultMessage: "Admin",
                description: "Role name for an admin user"
            },
            standardRoleName: {
                id: "useWorkspacews.standardRoleName",
                defaultMessage: "Member",
                description: "Role name for a standard user"
            }
        })
    },
    92720: function(e, n, r) {
        var t = r(39324),
            i = r(71209),
            a = r(70216),
            s = r(35250),
            o = r(47428),
            l = r(70079),
            d = r(89705),
            c = {
                Root: o.fC,
                Trigger: function(e) {
                    return (0, s.jsx)(d.J7, (0, t._)({
                        $as: o.xz
                    }, e))
                },
                Portal: o.Uv,
                Content: function(e) {
                    return (0, s.jsx)(d.ay, (0, t._)({
                        $as: o.VY,
                        sideOffset: 4,
                        align: "start"
                    }, e))
                },
                Item: l.forwardRef(function(e, n) {
                    var r = e.children,
                        l = e.onSelect,
                        c = (0, a._)(e, ["children", "onSelect"]);
                    return (0, s.jsx)(d.mS, (0, i._)((0, t._)({
                        $as: o.ck,
                        ref: n,
                        onSelect: l
                    }, c), {
                        children: r
                    }))
                })
            };
        n.Z = c
    },
    10580: function(e, n, r) {
        var t = r(39324),
            i = r(71209),
            a = r(70216),
            s = r(35250),
            o = r(48349),
            l = r(70079),
            d = r(1454),
            c = r(88327),
            u = r(89705),
            f = {
                Root: o.fC,
                Trigger: function(e) {
                    return (0, s.jsx)(u.J7, (0, t._)({
                        $as: o.xz
                    }, e))
                },
                Value: o.B4,
                Icon: function() {
                    return (0, s.jsx)(o.JO, {
                        children: (0, s.jsx)(c.ZP, {
                            icon: d.bTu,
                            size: "small"
                        })
                    })
                },
                Portal: o.h_,
                Content: function(e) {
                    var n = e.children,
                        r = (0, a._)(e, ["children"]);
                    return (0, s.jsxs)(u.ay, (0, i._)((0, t._)({
                        $as: o.VY,
                        side: "bottom",
                        sideOffset: 4,
                        position: "popper"
                    }, r), {
                        children: [(0, s.jsx)(o.u_, {
                            className: "flex h-8 cursor-default items-center justify-center bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200",
                            children: (0, s.jsx)(c.ZP, {
                                icon: d.rH8
                            })
                        }), (0, s.jsx)(o.l_, {
                            children: n
                        }), (0, s.jsx)(o.$G, {
                            className: "flex h-8 cursor-default items-center justify-center bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200",
                            children: (0, s.jsx)(c.ZP, {
                                icon: d.bTu
                            })
                        })]
                    }))
                },
                Item: l.forwardRef(function(e, n) {
                    var r = e.children,
                        l = (0, a._)(e, ["children"]);
                    return (0, s.jsx)(u.mS, (0, i._)((0, t._)({
                        $as: o.ck,
                        ref: n
                    }, l), {
                        children: (0, s.jsx)(o.eT, {
                            children: r
                        })
                    }))
                })
            };
        n.Z = f
    },
    55629: function(e, n, r) {
        var t = r(39324),
            i = r(71209),
            a = r(22830),
            s = r(35250),
            o = r(19841),
            l = r(70079);
        n.Z = {
            Root: function(e) {
                var n = e.children,
                    r = e.fixed,
                    t = e.className,
                    i = e.size,
                    d = (0, l.useRef)(null),
                    c = (0, l.useRef)(null),
                    u = (0, a._)((0, l.useState)(!1), 2),
                    f = u[0],
                    h = u[1];
                return (0, l.useEffect)(function() {
                    var e = d.current,
                        n = c.current;
                    if (e && n) {
                        var r = new ResizeObserver(function() {
                            h(n.scrollHeight > e.clientHeight)
                        });
                        return r.observe(e), function() {
                            return r.disconnect()
                        }
                    }
                }, []), (0, s.jsx)("div", {
                    className: (0, o.Z)("overflow-y-auto text-gray-600 dark:text-gray-300", "normal" === (void 0 === i ? "normal" : i) ? "text-base" : "text-sm", f && "pr-1", t),
                    ref: d,
                    children: (0, s.jsx)("table", {
                        className: (0, o.Z)("w-full border-separate border-spacing-0", void 0 !== r && r && "table-fixed"),
                        ref: c,
                        children: n
                    })
                })
            },
            Header: function(e) {
                var n = e.children;
                return (0, s.jsx)("thead", {
                    children: (0, s.jsx)("tr", {
                        children: n
                    })
                })
            },
            HeaderCell: function(e) {
                var n = e.textAlign,
                    r = e.children,
                    t = e.className;
                return (0, s.jsx)("th", {
                    className: (0, o.Z)("sticky top-0 z-10 border-b border-black/10 bg-white py-2 pr-4 font-medium last:pr-0 dark:border-white/10", "left" === (void 0 === n ? "left" : n) ? "text-left" : "text-right", void 0 === t ? "dark:bg-gray-900" : t),
                    children: r
                })
            },
            Body: function(e) {
                var n = e.children;
                return (0, s.jsx)("tbody", {
                    children: n
                })
            },
            Row: function(e) {
                var n = e.children,
                    r = e.disabled,
                    a = void 0 !== r && r;
                return (0, s.jsx)("tr", (0, i._)((0, t._)({}, a ? {
                    "data-disabled": !0
                } : {}), {
                    className: (0, o.Z)(a ? "pointer-events-none" : ""),
                    children: n
                }))
            },
            Cell: function(e) {
                var n = e.textAlign,
                    r = e.children,
                    t = e.className;
                return (0, s.jsx)("td", {
                    className: (0, o.Z)("border-b border-black/10  pr-4 last:pr-0 dark:border-white/10 [tr:last-child_&]:border-b-0", "left" === (void 0 === n ? "left" : n) ? "text-left" : "text-right", t),
                    children: (0, s.jsx)("div", {
                        className: "py-2 [tr[data-disabled=true]_&]:opacity-50",
                        children: r
                    })
                })
            },
            Actions: function(e) {
                var n = e.children;
                return (0, s.jsx)("div", {
                    className: "text-md flex items-center justify-end gap-2",
                    children: n
                })
            }
        }
    },
    45635: function(e, n, r) {
        r.d(n, {
            u: function() {
                return d
            }
        });
        var t = r(4337),
            i = r(35250),
            a = r(22444),
            s = r(19841);
        r(70079);
        var o = r(21389);
        function l() {
            var e = (0, t._)(["relative top-[-3px] h-2 w-2 rotate-45 transform border-r border-b border-black/10 bg-black shadow-xs"]);
            return l = function() {
                return e
            }, e
        }
        var d = function(e) {
                var n = e.label,
                    r = e.side,
                    t = e.sideOffset,
                    o = e.withArrow,
                    l = e.wide,
                    d = e.size,
                    u = void 0 === d ? "small" : d,
                    f = e.interactive,
                    h = e.usePortal,
                    x = e.className,
                    v = e.children,
                    m = e.delayDuration,
                    g = e.closeOnOutsideClick,
                    b = e.open,
                    p = (0, i.jsxs)(a.VY, {
                        onPointerDownOutside: void 0 === g || g ? void 0 : function(e) {
                            return e.preventDefault()
                        },
                        side: void 0 === r ? "bottom" : r,
                        sideOffset: void 0 === t ? 14 : t,
                        className: (0, s.Z)("relative rounded-lg border border-black/10 bg-black p-1 shadow-xs transition-opacity", void 0 !== l && l ? "max-w-sm" : "max-w-xs", x),
                        children: [(0, i.jsx)("span", {
                            className: (0, s.Z)("flex items-center whitespace-pre-wrap px-2 py-1 text-center font-medium normal-case text-white", {
                                "text-xs": "xsmall" === u,
                                "text-sm": "small" === u
                            }),
                            children: n
                        }), (void 0 === o || o) && (0, i.jsx)(a.Eh, {
                            asChild: !0,
                            children: (0, i.jsx)(c, {})
                        })]
                    });
                return (0, i.jsxs)(a.fC, {
                    delayDuration: void 0 === m ? 300 : m,
                    disableHoverableContent: !(void 0 !== f && f),
                    open: b,
                    children: [(0, i.jsx)(a.xz, {
                        asChild: !0,
                        children: (0, i.jsx)("span", {
                            className: x,
                            children: v
                        })
                    }), void 0 === h || h ? (0, i.jsx)(a.h_, {
                        children: p
                    }) : p]
                })
            },
            c = o.Z.div(l())
    },
    89705: function(e, n, r) {
        r.d(n, {
            J7: function() {
                return l
            },
            ay: function() {
                return c
            },
            mS: function() {
                return d
            }
        });
        var t = r(4337),
            i = r(21389);
        function a() {
            var e = (0, t._)(["\ntext-gray-700 border border-transparent inline-flex h-9 items-center justify-center gap-4 rounded-md bg-white px-3 text-sm\ndark:text-gray-200 dark:transparent dark:bg-transparent\nleading-none outline-none cursor-pointer\nhover:bg-gray-50 dark:hover:bg-[#494A54]\nfocus-visible:border-blue-500 dark:focus-visible:border-blue-500\nradix-state-active:text-gray-600 dark:radix-state-active::text-gray-400\nradix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-gray-500 dark:radix-disabled:bg-transparent dark:radix-disabled:text-gray-500\n"]);
            return a = function() {
                return e
            }, e
        }
        function s() {
            var e = (0, t._)(["\nrelative flex h-8 cursor-pointer select-none items-center rounded-md pl-3 pr-7 text-sm leading-none text-gray-700 hover:bg-gray-50 radix-disabled:pointer-events-none radix-highlighted:bg-gray-50 radix-disabled:text-gray-300 radix-highlighted:outline-none dark:text-gray-200 dark:hover:bg-[#2E2F33] dark:radix-highlighted:bg-[#2E2F33] dark:radix-disabled:text-gray-600 dark:radix-highlighted:hover:bg-[#2E2F33]\n"]);
            return s = function() {
                return e
            }, e
        }
        function o() {
            var e = (0, t._)(["\nmin-w-[220px] rounded-lg bg-white dark:bg-gray-900 p-[5px] shadow-xs will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade\n"]);
            return o = function() {
                return e
            }, e
        }
        var l = i.Z.button(a()),
            d = i.Z.div(s()),
            c = i.Z.div(o())
    },
    15329: function(e, n, r) {
        r.d(n, {
            R: function() {
                return m
            },
            Vq: function() {
                return g
            },
            ZB: function() {
                return x
            },
            ZP: function() {
                return h
            },
            zV: function() {
                return v
            }
        });
        var t = r(4337),
            i = r(35250),
            a = r(7813),
            s = r(19841),
            o = r(21389);
        function l() {
            var e = (0, t._)(["p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer"]);
            return l = function() {
                return e
            }, e
        }
        function d() {
            var e = (0, t._)(["flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm"]);
            return d = function() {
                return e
            }, e
        }
        function c() {
            var e = (0, t._)(["rounded-md border border-white/20 hover:bg-gray-500/10 h-11"]);
            return c = function() {
                return e
            }, e
        }
        function u() {
            var e = (0, t._)(["my-1.5 h-px bg-white/20"]);
            return u = function() {
                return e
            }, e
        }
        function f() {
            var e = (0, t._)(["", ""]);
            return f = function() {
                return e
            }, e
        }
        function h(e) {
            var n = e.onClick,
                r = e.href,
                t = e.target,
                o = e.children;
            return (0, i.jsx)(a.v.Item, {
                children: function(e) {
                    var a = e.active;
                    return (0, i.jsx)(x, {
                        as: void 0 !== r ? "a" : "button",
                        onClick: n,
                        href: r,
                        target: t,
                        className: (0, s.Z)(a ? "bg-gray-700" : "hover:bg-gray-700"),
                        children: o
                    })
                }
            })
        }
        o.Z.a(l());
        var x = o.Z.a(d()),
            v = (0, o.Z)(x)(c()),
            m = o.Z.div(u()),
            g = (0, o.Z)(x)(f(), function(e) {
                return e.$active ? "bg-gray-800" : "hover:bg-gray-800"
            })
    },
    46020: function(e, n, r) {
        r.d(n, {
            B: function() {
                return i
            },
            EV: function() {
                return x
            },
            bM: function() {
                return f
            },
            tN: function() {
                return u
            },
            vm: function() {
                return h
            }
        });
        var t,
            i,
            a,
            s = r(39324),
            o = r(78103),
            l = r(6948);
        (t = i || (i = {})).AccountPortal = "account-portal",
        t.UserContext = "user-context",
        t.DownloadMessages = "download-messages",
        t.InviteUsersToWorkspace = "invite-users-to-workspace",
        t.TempBrowseToast = "temp-browse-toast",
        t.WorkspaceSwitcher = "workspace-switcher";
        var d = "UiState.isNavigationCollapsed.1",
            c = {
                isThreadHeaderVisible: !0,
                isDesktopNavCollapsed: null !== (a = l.m.getItem(d)) && void 0 !== a && a,
                sharingModalThreadId: void 0,
                isFilesModalOpen: !1,
                activeSidebar: !1,
                activeModals: new Set
            },
            u = (0, o.ZP)()(function() {
                return (0, s._)({}, c)
            }),
            f = {
                isDesktopNavCollapsed: function(e) {
                    return e.isDesktopNavCollapsed
                },
                isThreadHeaderVisible: function(e) {
                    return e.isThreadHeaderVisible
                }
            },
            h = {
                toggleDesktopNavCollapsed: function() {
                    u.setState(function(e) {
                        var n = !e.isDesktopNavCollapsed;
                        return l.m.setItem(d, n), {
                            isDesktopNavCollapsed: n
                        }
                    })
                },
                hideThreadHeader: function() {
                    u.setState({
                        isThreadHeaderVisible: !1
                    })
                },
                showThreadHeader: function() {
                    u.setState({
                        isThreadHeaderVisible: !0
                    })
                },
                openSharingModal: function(e) {
                    u.setState({
                        sharingModalThreadId: e
                    })
                },
                closeSharingModal: function() {
                    u.setState({
                        sharingModalThreadId: void 0
                    })
                },
                openFilesModal: function() {
                    u.setState({
                        isFilesModalOpen: !0
                    })
                },
                closeFilesModal: function() {
                    u.setState({
                        isFilesModalOpen: !1
                    })
                },
                setActiveSidebar: function(e) {
                    u.setState({
                        activeSidebar: e
                    })
                },
                toggleActiveSidebar: function(e) {
                    u.setState(function(n) {
                        return {
                            activeSidebar: n.activeSidebar !== e && e
                        }
                    })
                },
                openModal: function(e) {
                    u.setState(function(n) {
                        var r = new Set(n.activeModals);
                        return r.add(e), {
                            activeModals: r
                        }
                    })
                },
                closeModal: function(e) {
                    u.setState(function(n) {
                        var r = new Set(n.activeModals);
                        return r.delete(e), {
                            activeModals: r
                        }
                    })
                }
            };
        function x(e) {
            return u(function(n) {
                return n.activeModals.has(e)
            })
        }
    },
    33669: function(e, n, r) {
        r.d(n, {
            _G: function() {
                return i
            },
            aj: function() {
                return x
            },
            dQ: function() {
                return v
            },
            oc: function() {
                return u
            },
            w$: function() {
                return f
            },
            x_: function() {
                return h
            }
        });
        var t,
            i,
            a,
            s = r(96237),
            o = r(22830),
            l = r(70079);
        (t = i || (i = {})).Mobile = "mobile",
        t.Small = "small",
        t.Medium = "medium",
        t.Large = "large",
        t.XLarge = "xlarge";
        var d = (a = {}, (0, s._)(a, i.Small, 640), (0, s._)(a, i.Medium, 768), (0, s._)(a, i.Large, 1024), (0, s._)(a, i.XLarge, 1280), a);
        function c(e) {
            var n = function() {
                    a(r(e))
                },
                r = function(e) {
                    return window.matchMedia(e).matches
                },
                t = (0, o._)((0, l.useState)(r(e)), 2),
                i = t[0],
                a = t[1];
            return (0, l.useEffect)(function() {
                var r = window.matchMedia(e);
                return n(), r.addListener ? r.addListener(n) : r.addEventListener("change", n), function() {
                    r.removeListener ? r.removeListener(n) : r.removeEventListener("change", n)
                }
            }, [e]), i
        }
        function u() {
            return c("(min-width: ".concat(d[i.Small], "px)"))
        }
        function f() {
            return c("(min-width: ".concat(d[i.Medium], "px)"))
        }
        function h() {
            return c("(min-width: ".concat(d[i.Large], "px)"))
        }
        function x() {
            return c("(min-width: ".concat(d[i.XLarge], "px)"))
        }
        function v() {
            var e = u(),
                n = f(),
                r = h();
            return x() ? i.XLarge : r ? i.Large : n ? i.Medium : e ? i.Small : i.Mobile
        }
    }
}]);
