/* eslint-disable */
/* -------------------------------------------------- */
/*      Start of Webpack Hot Extension Middleware     */
/* ================================================== */
/*  This will be converted into a lodash templ., any  */
/*  external argument must be provided using it       */
/* -------------------------------------------------- */
(function() {
  try {window} catch {var window: any;};

  const injectionContext = this || window || chrome ? {browser: chrome} : {browser: null};

  (function() {
    `<%= polyfillSource %>`;
  })();

  const { browser }: any = injectionContext || {};
  const signals: any = JSON.parse('<%= signals %>');
  const config: any = JSON.parse('<%= config %>');

  const reloadPage: boolean = ("<%= reloadPage %>" as "true" | "false") === "true";
  const wsHost = "<%= WSHost %>";
  const {
    SIGN_CHANGE,
    SIGN_RELOAD,
    SIGN_RELOADED,
    SIGN_LOG,
    SIGN_CONNECT
  } = signals;
  const { RECONNECT_INTERVAL, RECONNECT_ATTEMPT, SOCKET_ERR_CODE_REF } = config;

  const { runtime, tabs } = browser;
  const manifest = runtime.getManifest();

  // =============================== Helper functions ======================================= //
  const formatter = (msg: string) => `[ WER: ${msg} ]`;
  const logger = (msg, level = "info") => console[level](formatter(msg));
  const timeFormatter = (date: Date) =>
    date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

  // ========================== Called only on content scripts ============================== //
  function contentScriptWorker() {
    runtime.sendMessage({ type: SIGN_CONNECT }).then(msg => console.info(msg));

    runtime.onMessage.addListener(({ type, payload }: { type: string; payload: any }) => {
      switch (type) {
        case SIGN_RELOAD:
          logger("Detected Changes. Reloading...");
          // eslint-disable-next-line no-var,vars-on-top,block-scoped-var
          reloadPage && window?.location.reload();
          break;
        case SIGN_LOG:
          console.info(payload);
          break;
        default:
          break;
      }
    });
  }

  // ======================== Called only on background scripts ============================= //
  function backgroundWorker(socket: WebSocket) {
    runtime.onMessage.addListener((action: { type: string; payload: any }, sender) => {
      if (action.type === SIGN_CONNECT) {
        return Promise.resolve(formatter("Connected to Web Extension Hot Reloader"));
      }
      return true;
    });

    socket.addEventListener("message", ({ data }: MessageEvent) => {
      const { type, payload } = JSON.parse(data);

      if (type === SIGN_CHANGE && (!payload || !payload.onlyPageChanged)) {
        tabs.query({ status: "complete" }).then(loadedTabs => {
          loadedTabs.forEach(
            tab => tab.id && tabs.sendMessage(tab.id, { type: SIGN_RELOAD }),
          );
          socket.send(
            JSON.stringify({
              type: SIGN_RELOADED,
              payload: formatter(
                `${timeFormatter(new Date())} - ${
                  manifest.name
                } successfully reloaded`,
              ),
            }),
          );
          runtime.reload();
        });
      } else {
        runtime.sendMessage({ type, payload });
      }
    });

    socket.addEventListener("close", ({ code }: CloseEvent) => {
      logger(
        `Socket connection closed. Code ${code}. See more in ${
          SOCKET_ERR_CODE_REF
        }`,
        "warn",
      );

      let reconnectAttempts = 0;
      const intId = setInterval(() => {
        logger("Attempting to reconnect (tip: Check if Webpack is running)");
        const ws = new WebSocket(wsHost);
        ws.onerror = () => {
          if (reconnectAttempts >= RECONNECT_ATTEMPT) {
            logger(`Could not reconnect after ${RECONNECT_ATTEMPT} attempts. Stopping automatic retry. To restart reload the extension manually.`, "warn");
            clearInterval(intId);
          } else {
            logger(`Error trying to re-connect. Reattempting in ${RECONNECT_INTERVAL / 1000}s`, "warn");
          }

          reconnectAttempts++;
        }
        ws.addEventListener("open", () => {
          clearInterval(intId);
          logger("Reconnected. Reloading plugin");
          runtime.reload();
        });

      }, RECONNECT_INTERVAL);
    });
  }

  // ======================== Called only on extension pages that are not the background ============================= //
  function extensionPageWorker() {
    runtime.sendMessage({ type: SIGN_CONNECT }).then(msg => console.info(msg));

    runtime.onMessage.addListener(({ type, payload }: { type: string; payload: any }) => {
      switch (type) {
        case SIGN_CHANGE:
          logger("Detected Changes. Reloading...");
          reloadPage && window?.location.reload();
          break;

        case SIGN_LOG:
          console.info(payload);
          break;

        default:
          break;
      }
    });
  }

  // ======================= Bootstraps the middleware =========================== //
  runtime.reload
    ? !window ? backgroundWorker(new WebSocket(wsHost)) : extensionPageWorker()
    : contentScriptWorker();
})();
/* eslint-disable */
/* ----------------------------------------------- */
/* End of Webpack Hot Extension Middleware  */
/* ----------------------------------------------- */
