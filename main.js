"ui";
(() => {
  ui.layout(
    <vertical>
      {/* 首页 */}
      <vertical
        h="*"
        id="homepage"
        bg="#E5E5E9"
        name=".MainActivity"
        exported="true"
      >
        <linear
          padding="16dp 10dp 16dp 14dp"
          orientation="horizontal"
          gravity="center"
          bg="#FFFFFF"
        >
          <text
            id="title"
            textColor="#1D2129"
            textStyle="bold"
            textSize="17sp"
          />

          <horizontal bg="#F53F3F" padding="8 3 8 3" marginLeft="16">
            <text id="statetext" textColor="#FFFFFF" />
          </horizontal>
          <vertical layout_weight="1" gravity="right" id="setup">
            <img
              id="setup"
              w="20"
              h="20"
              src="https://ttmini.yizhiwechat.com/ketang/settings.png"
            />
          </vertical>
        </linear>

        <card
          w="*"
          h="auto"
          margin="8 16 8 8"
          cardCornerRadius="2dp"
          cardElevation="1dp"
        >
          <vertical
            padding="8"
            orientation="vertical"
            layout_height="fill_parent"
          >
            <linear
              orientation="horizontal"
              layout_gravity="center_vertical"
              id="h"
              padding="6px"
              bg="#FFFFFF"
              layout_weight="1"
            >
              <text
                layout_gravity="center_vertical"
                text="机器人ID"
                textStyle="bold"
                textSize="16sp"
                textColor="#161823"
              ></text>
              <vertical
                orientation="horizontal"
                layout_gravity="center_vertical"
                layout_weight="1"
                id="userIDsave"
              >
                <input
                  layout_weight="1"
                  id="userID"
                  hint="请输入"
                  textSizeHint="15sp"
                  textSize="16sp"
                />
                <vertical orientation="horizontal" layout_height="fill_parent">
                  <img
                    id="deluserID"
                    layout_gravity="center_vertical"
                    w="20"
                    h="20"
                    src="https://ttmini.yizhiwechat.com/ketang/del-icon.png"
                  />
                  <text
                    marginLeft="16"
                    id="completeuserID"
                    layout_gravity="center_vertical"
                    text="完成"
                    textStyle="bold"
                    textColor="#0C80FF"
                  ></text>
                </vertical>
              </vertical>
              <vertical
                orientation="horizontal"
                layout_gravity="center_vertical"
                layout_weight="1"
                id="userIDsaveedit"
                h="23"
              >
                <text
                  layout_weight="1"
                  layout_gravity="center_vertical"
                  marginLeft="12"
                  id="userIDtext"
                ></text>
                <vertical orientation="horizontal" layout_height="fill_parent">
                  <img
                    layout_gravity="center_vertical"
                    w="16"
                    h="16"
                    id="ui_copy"
                    src="https://ttmini.yizhiwechat.com/ketang/ui_copy.png"
                    marginLeft="3"
                  />
                  <vertical id="unbound">
                    <text
                      marginLeft="16"
                      padding="4 1 4 1"
                      layout_gravity="center_vertical"
                      text="未绑定"
                      textSize="14sp"
                      textStyle="bold"
                      textColor="#4E5969"
                      bg="#E5E6E7"
                    ></text>
                  </vertical>
                  <vertical id="Alreadybound">
                    <text
                      marginLeft="16"
                      padding="4 1 4 1"
                      layout_gravity="center_vertical"
                      text="已绑定"
                      textSize="16sp"
                      textStyle="bold"
                      textColor="#00B42A"
                      bg="#E8FFEB"
                    ></text>
                  </vertical>

                  <text
                    marginLeft="16"
                    id="edituserID"
                    layout_gravity="center_vertical"
                    text="修改"
                    textStyle="bold"
                    textColor="#0C80FF"
                    textSize="16sp"
                  ></text>
                </vertical>
              </vertical>
            </linear>
            <linear
              orientation="horizontal"
              layout_gravity="center_vertical"
              id="h"
              bg="#FFFFFF"
              layout_weight="1"
              marginTop="16"
            >
              <text
                textStyle="bold"
                textColor="#161823"
                layout_gravity="center_vertical"
                text="企业微信版本: 未适配/未安装"
                textSize="16sp"
              ></text>

              <vertical
                orientation="horizontal"
                layout_weight="1"
                gravity="right"
              >
                <text
                  layout_gravity="center_vertical"
                  text="查看适配版本 "
                  id="showAdaptationversion"
                  textSize="16sp"
                ></text>
                <img
                  layout_gravity="center_vertical"
                  id="setup"
                  w="12"
                  h="12"
                  src="https://ttmini.yizhiwechat.com/keTang/arrow2.png"
                />
              </vertical>
            </linear>
            <linear
              orientation="horizontal"
              layout_gravity="center_vertical"
              id="h"
              bg="#FFFFFF"
              layout_weight="1"
              marginTop="20"
              paddingBottom="8"
            >
              <text
                textStyle="bold"
                textColor="#161823"
                layout_gravity="center_vertical"
                textSize="16sp"
                text="企业微信状态：未检查/未登录"
              ></text>

              <vertical
                orientation="horizontal"
                layout_weight="1"
                gravity="right"
              >
                <text
                  layout_gravity="right"
                  textStyle="bold"
                  textColor="#0C80FF"
                  text="检查"
                  textSize="16sp"
                ></text>
              </vertical>
            </linear>
          </vertical>
        </card>
        <text text="需开启权限" padding="8"></text>
        <card
          w="*"
          h="auto"
          margin="8"
          cardCornerRadius="2dp"
          cardElevation="1dp"
        >
          <vertical
            padding="8"
            orientation="vertical"
            layout_height="fill_parent"
          >
            <linear
              orientation="horizontal"
              layout_gravity="center_vertical"
              id="h"
              bg="#FFFFFF"
              layout_weight="1"
            >
              <text
                textStyle="bold"
                textColor="#161823"
                layout_gravity="center_vertical"
                text="无障碍"
                textSize="16sp"
              ></text>

              <vertical
                orientation="horizontal"
                layout_weight="1"
                gravity="right"
              >
                <checkbox
                  id="accessibility"
                  checked="{{auto.service!==null}}"
                ></checkbox>
              </vertical>
            </linear>
            <linear
              orientation="horizontal"
              layout_gravity="center_vertical"
              id="h"
              bg="#FFFFFF"
              layout_weight="1"
              marginTop="20"
            >
              <text
                textStyle="bold"
                textColor="#161823"
                layout_gravity="center_vertical"
                text="通知权限"
                textSize="16sp"
              ></text>

              <vertical
                orientation="horizontal"
                layout_weight="1"
                gravity="right"
              >
                <checkbox id="notice"></checkbox>
              </vertical>
            </linear>
            <linear
              orientation="horizontal"
              layout_gravity="center_vertical"
              id="h"
              bg="#FFFFFF"
              layout_weight="1"
              marginTop="20"
            >
              <text
                textStyle="bold"
                textColor="#161823"
                layout_gravity="center_vertical"
                text="悬浮窗权限"
                textSize="16sp"
              ></text>

              <vertical
                orientation="horizontal"
                layout_weight="1"
                gravity="right"
              >
                <checkbox
                  id="SuspendedWindow"
                  checked="{{floaty.checkPermission() != false}}"
                ></checkbox>
              </vertical>
            </linear>
            <linear
              orientation="horizontal"
              layout_gravity="center_vertical"
              id="h"
              bg="#FFFFFF"
              layout_weight="1"
              marginTop="20"
            >
              <text
                textStyle="bold"
                textColor="#161823"
                layout_gravity="center_vertical"
                text="手机关闭密码"
                textSize="16sp"
              ></text>

              <vertical
                orientation="horizontal"
                layout_weight="1"
                gravity="right"
              >
                <checkbox id="Unlock"></checkbox>
              </vertical>
            </linear>
          </vertical>
        </card>
        <card
          w="*"
          h="auto"
          margin="8"
          cardCornerRadius="2dp"
          cardElevation="1dp"
        >
          <vertical
            padding="8"
            orientation="vertical"
            layout_height="fill_parent"
          >
            <linear
              orientation="horizontal"
              layout_gravity="center_vertical"
              id="h"
              bg="#FFFFFF"
              layout_weight="1"
            >
              <text
                id="Numberoftasks"
                textStyle="bold"
                textColor="#161823"
                layout_gravity="center_vertical"
                text="待执行任务"
                textSize="16sp"
              ></text>

              <vertical
                orientation="horizontal"
                layout_weight="1"
                gravity="right"
              >
                <text
                  text="查看"
                  id="showlist"
                  textSize="16sp"
                  textColor="#0C80FF"
                ></text>
                <text
                  text="收起"
                  id="retractlist"
                  textSize="16sp"
                  textColor="#0C80FF"
                ></text>
                <text
                  text="清空"
                  textSize="16sp"
                  id="clearlist"
                  textColor="#FF365D"
                  marginLeft="20"
                ></text>
              </vertical>
            </linear>
            <linear
              orientation="horizontal"
              layout_gravity="center_vertical"
              id="hscrollID"
              bg="#FFFFFF"
              layout_weight="1"
              marginTop="8"
            >
              <frame w="*" h="100">
                <scroll bg="#FFFFFF" id="scrollID">
                  <list id="list">
                    <linear marginBottom="4" orientation="horizontal">
                      <text
                        id="name"
                        textSize="13sp"
                        textColor="#000000"
                        text="{{type}}"
                      />
                      <text
                        id="name"
                        textSize="13sp"
                        textColor="#000000"
                        text="向{{name}}发送了公告："
                      />
                      <text
                        id="value"
                        textSize="13sp"
                        ellipsize="end"
                        textColor="#000000"
                        text="{{value}}"
                        maxLines="1"
                        lines="1"
                      />
                    </linear>
                  </list>
                </scroll>
              </frame>
            </linear>
          </vertical>
        </card>
        <card
          w="*"
          h="52"
          margin="8"
          cardCornerRadius="2dp"
          cardElevation="1dp"
        >
          <vertical
            padding="8"
            orientation="vertical"
            layout_height="fill_parent"
          >
            <linear
              orientation="horizontal"
              layout_gravity="center_vertical"
              id="Starthosting"
              bg="#FFFFFF"
              layout_weight="1"
              gravity="center"
            >
              <text
                id="Starthostingtext"
                textStyle="bold"
                textColor="#0C80FF"
                layout_gravity="center_vertical"
                text="开始托管"
                textSize="16sp"
              ></text>
            </linear>
          </vertical>
        </card>
      </vertical>
      {/* 设置页 */}
      <vertical h="*" id="setuppage">
        <linear
          padding="8dp 10dp 8dp 14dp"
          orientation="horizontal"
          bg="#FFFFFF"
          id="returnhome"
        >
          <img
            w="20"
            h="20"
            src="https://ttmini.yizhiwechat.com/keTang/left-icon.png"
          />
          <text
            text="设置"
            textColor="#1D2129"
            textStyle="bold"
            textSize="17sp"
            marginLeft="16"
          />
        </linear>
        <text text="权限" padding="8"></text>
        <card
          w="*"
          h="auto"
          margin="8"
          cardCornerRadius="2dp"
          cardElevation="1dp"
        >
          <vertical
            padding="8"
            orientation="vertical"
            layout_height="fill_parent"
          >
            <linear
              orientation="horizontal"
              layout_gravity="center_vertical"
              id="h"
              bg="#FFFFFF"
              layout_weight="1"
            >
              <text
                textStyle="bold"
                textColor="#161823"
                layout_gravity="center_vertical"
                text="无障碍"
                textSize="16sp"
              ></text>

              <vertical
                orientation="horizontal"
                layout_weight="1"
                gravity="right"
              >
                <checkbox
                  id="accessibilityone"
                  checked="{{auto.service!==null}}"
                ></checkbox>
              </vertical>
            </linear>
            <linear
              orientation="horizontal"
              layout_gravity="center_vertical"
              id="h"
              bg="#FFFFFF"
              layout_weight="1"
              marginTop="20"
            >
              <text
                textStyle="bold"
                textColor="#161823"
                layout_gravity="center_vertical"
                text="通知权限"
                textSize="16sp"
              ></text>

              <vertical
                orientation="horizontal"
                layout_weight="1"
                gravity="right"
              >
                <checkbox id="noticeone"></checkbox>
              </vertical>
            </linear>
            <linear
              orientation="horizontal"
              layout_gravity="center_vertical"
              id="h"
              bg="#FFFFFF"
              layout_weight="1"
              marginTop="20"
            >
              <text
                textStyle="bold"
                textColor="#161823"
                layout_gravity="center_vertical"
                text="悬浮窗权限"
                textSize="16sp"
              ></text>

              <vertical
                orientation="horizontal"
                layout_weight="1"
                gravity="right"
              >
                <checkbox
                  id="SuspendedWindowone"
                  checked="{{floaty.checkPermission() != false}}"
                ></checkbox>
              </vertical>
            </linear>
            <linear
              orientation="horizontal"
              layout_gravity="center_vertical"
              id="h"
              bg="#FFFFFF"
              layout_weight="1"
              marginTop="20"
            >
              <text
                textStyle="bold"
                textColor="#161823"
                layout_gravity="center_vertical"
                text="手机关闭密码"
                textSize="16sp"
              ></text>

              <vertical
                orientation="horizontal"
                layout_weight="1"
                gravity="right"
              >
                <checkbox id="Unlockone"></checkbox>
              </vertical>
            </linear>
          </vertical>
        </card>
        <card
          w="*"
          h="auto"
          margin="8"
          cardCornerRadius="2dp"
          cardElevation="1dp"
        >
          <vertical
            padding="8"
            orientation="vertical"
            layout_height="fill_parent"
          >
            <linear
              orientation="horizontal"
              layout_gravity="center_vertical"
              id="h"
              bg="#FFFFFF"
              layout_weight="1"
            >
              <text
                textStyle="bold"
                textColor="#161823"
                layout_gravity="center_vertical"
                text="日志"
                textSize="16sp"
              ></text>

              <vertical
                id="getconsoleinfo"
                orientation="horizontal"
                layout_weight="1"
                gravity="right"
              >
                <text layout_gravity="right" text="查看 "></text>
                <img
                  id="setup"
                  layout_gravity="center_vertical"
                  w="12"
                  h="12"
                  src="https://ttmini.yizhiwechat.com/keTang/arrow2.png"
                />
              </vertical>
            </linear>
          </vertical>
        </card>
        <text text="其他" padding="8" textSize="16sp"></text>
        <card
          w="*"
          h="auto"
          margin="8"
          cardCornerRadius="2dp"
          cardElevation="1dp"
        >
          <vertical
            padding="8"
            orientation="vertical"
            layout_height="fill_parent"
          >
            <linear
              orientation="horizontal"
              layout_gravity="center_vertical"
              id="h"
              bg="#FFFFFF"
              layout_weight="1"
            >
              <text
                textStyle="bold"
                textColor="#161823"
                layout_gravity="center_vertical"
                text="显示悬浮球"
                textSize="16sp"
              ></text>

              <vertical
                orientation="horizontal"
                layout_weight="1"
                gravity="right"
              >
                <Switch id="showmySwitch" checked="false" />
              </vertical>
            </linear>
          </vertical>
        </card>
      </vertical>
      {/* 版本页 */}
      <vertical h="*" id="Adaptationversion">
        <linear padding="8dp 10dp 8dp 14dp" bg="#FFFFFF" id="versionreturnhome">
          <img
            w="20"
            h="20"
            src="https://ttmini.yizhiwechat.com/keTang/left-icon.png"
          />
          <text
            text="适配版本"
            textColor="#1D2129"
            textStyle="bold"
            textSize="17sp"
            marginLeft="16"
          />
        </linear>
        <frame w="*" h="*">
          <scroll id="scrollID">
            <list id="versionlist">
              <card
                w="*"
                h="auto"
                margin="8"
                cardCornerRadius="2dp"
                cardElevation="1dp"
                layout_gravity="center_vertical"
              >
                <linear
                  orientation="horizontal"
                  layout_gravity="center_vertical"
                  gravity="center"
                  id="versionitem"
                  bg="#FFFFFF"
                  layout_weight="1"
                  padding="15"
                >
                  <text
                    textStyle="bold"
                    textColor="#161823"
                    layout_gravity="center_vertical"
                    text="{{name}}"
                    textSize="16sp"
                  ></text>

                  <vertical
                    orientation="horizontal"
                    layout_weight="1"
                    gravity="right"
                  >
                    <text
                      textStyle="bold"
                      textColor="#0C80FF"
                      textSize="16sp"
                      text="下载"
                      marginRight="4"
                      id="versionDownload"
                    ></text>

                    <img
                      w="14"
                      h="14"
                      marginTop="2"
                      src="https://ttmini.yizhiwechat.com/keTang/download-icon.png"
                    />
                  </vertical>
                </linear>
              </card>
            </list>
          </scroll>
        </frame>
      </vertical>
    </vertical>
  );
  ui.setuppage.visibility = 8;
  ui.hscrollID.visibility = 8;
  ui.retractlist.visibility = 8;
  ui.Adaptationversion.visibility = 8;

  // 任务列表
  var items = [];
  //版本列表
  var versionlist = [
    {
      name: "8.01",
      href: "http://baidu.com",
    },
    {
      name: "8.02",
      href: "http://baidu.com",
    },
    {
      name: "8.03",
      href: "http://baidu.com",
    },
    {
      name: "8.04",
      href: "http://baidu.com",
    },
    {
      name: "8.05",
      href: "http://baidu.com",
    },
  ];

  //机器人id
  var setIntervalID = "";
  //任务数量
  var Numbertasks = 10;
  const condition = true;

  if (condition) {
    // 默认显示机器人id 编辑态`
    ui.userIDsave.visibility = 8;
    ui.userIDsaveedit.visibility = 0;
  }
  function init() {
    //查询当前无障碍的是否开启
    ui.accessibility.checked = auto.service != null;
    //检查当前通知权限是否开启
    ui.notice.checked = checkNotificationAccess();
    //检查悬浮窗权限是否开启
    ui.SuspendedWindow.checked = floaty.checkPermission();
    //手机是否设置了密码
    ui.Unlock.checked = getLockScreenInfo() !== true;

    //设置标题文案
    ui.title.setText("企业消息助手");
    //状态文案
    ui.statetext.setText("连接失败");
    //任务数量、
    ui.Numberoftasks.setText(`待执行任务（${Numbertasks}）`);
    //注册设置页事件
    ui.setup.on("click", () => {
      ui.homepage.visibility = 8;
      ui.setuppage.visibility = 0;
    });
    //注册事件返回首页
    ui.returnhome.on("click", function () {
      ui.homepage.visibility = 0;
      ui.setuppage.visibility = 8;
    });
    //注册 事件 返回首页
    ui.versionreturnhome.on("click", function () {
      ui.homepage.visibility = 0;
      ui.Adaptationversion.visibility = 8;
    });
    // showAdaptationversion 事件 进入版本页面
    ui.showAdaptationversion.on("click", function () {
      ui.homepage.visibility = 8;
      ui.Adaptationversion.visibility = 0;
      //注入版本列表
      ui.versionlist.setDataSource(versionlist);
      //给每个元素注册 下载事件
      setTimeout(() => {
        // 获取 获取子控件数量 控件
        const indexs = ui.versionlist.getChildCount();
        for (let index = 0; index < indexs; index++) {
          (function (index) {
            ui.versionlist
              .getChildAt(index)
              .getChildAt(0)
              .getChildAt(1)
              .getChildAt(0)
              .on("click", function () {
                // 创建一个新线程来下载文件
                threads.start(function () {
                  //添加安装包下架链接
                  var url = versionlist[index].href;
                  var res = http.get(url);
                  if (res.statusCode == 200) {
                    var filePath = "/sdcard/Download/app.apk"; // 保存文件的路径
                    files.writeBytes(filePath, res.body.bytes());
                    // 安装应用程序
                    app.startActivity({
                      action: "android.intent.action.VIEW",
                      data: "file://" + filePath,
                      type: "application/vnd.android.package-archive",
                    });
                    toast("安装包下载成功");
                  } else {
                    toast("安装包下载失败");
                  }
                });
              });
          })(index);
        }
      });
    });

    //开启托管
    ui.Starthosting.on("click", function () {
      if (Numbertasks > 0) {
        if (ui.Starthostingtext.getText() === "停止托管") {
          ui.Starthostingtext.setText("开始托管");
          clearInterval(setIntervalID);
          ui.Starthostingtext.setTextColor(colors.parseColor("#0C80FF"));
        } else {
          ui.Starthostingtext.setText("停止托管");
          ui.Starthostingtext.setTextColor(colors.parseColor("#FF0000"));
          setIntervalID = setInterval(updateList, 1000); // 每1秒更新一次列表
          ui.list.setDataSource(items);
          ui.showlist.click();
        }
      } else {
        toast("没有可以执行的任务"); // 显示提示消息
      }
    });

    //清空任务列表
    ui.clearlist.on("click", function () {
      clearlist();
    });
    //显示任务列表事件
    ui.showlist.on("click", function () {
      ui.hscrollID.visibility = 0;
      ui.showlist.visibility = 8;
      ui.retractlist.visibility = 0;
    });
    //隐藏任务列表事件
    ui.retractlist.on("click", function () {
      ui.showlist.visibility = 0;
      ui.hscrollID.visibility = 8;
      ui.retractlist.visibility = 8;
    });
    // 设置机器人id 事件
    ui.completeuserID.on("click", () => {
      // 隐藏机器人id 编辑态
      ui.userIDsave.visibility = 8;
      //显示机器人id
      ui.userIDsaveedit.visibility = 0;
      var userIDvalue = ui.userID.text();
      if (userIDvalue) {
        ui.userIDtext.setText(userIDvalue);
      }
      inituserID();
    });
    ui.edituserID.on("click", () => {
      // 隐藏机器人id 编辑态
      ui.userIDsave.visibility = 0;
      ui.userIDsaveedit.visibility = 8;
      inituserID();
    });
    ui.deluserID.on("click", () => {
      //  清除userID
      ui.userID.setText("");
    });
    //复制事件
    ui.ui_copy.on("click", () => {
      if (ui.userIDtext.getText()) {
        setClip(ui.userIDtext.getText()); // 复制文tia本到剪贴板
        toast("复制成功"); // 显示提示消息
      } else {
        toast("复制失败请输入机器人ID"); // 显示提示消息
      }
    });
    //无障碍事件
    ui.accessibility.on("check", function (checked) {
      //如果开关是true 并且没有开无障碍 则跳转去开启
      if (checked && auto.service == null) {
        app.startActivity({
          action: "android.settings.ACCESSIBILITY_SETTINGS",
        });
      }
      if (!checked && auto.service != null) {
        auto.service.disableSelf();
      }
    });
    //通知权限事件
    ui.notice.on("click", function (checked) {
      const bool = checkNotificationAccess();
      const hasNotificationAccess = checkNotificationAccess();

      if (checked && !hasNotificationAccess) {
        app.startActivity({
          action: "android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS",
        });
      } else {
        //无法通过命令来关闭通知权限
        app.startActivity({
          action: "android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS",
        });
        toast("请在设置中关闭通知权限");
      }
    });
    //悬浮窗事件
    ui.SuspendedWindow.on("click", function (e) {
      if (!floaty.checkPermission() && ui.SuspendedWindow.checked) {
        // 没有悬浮窗权限，提示用户并跳转请求
        floaty.requestPermission();
      } else {
        floaty.requestPermission();
        toast("请在设置中关闭悬浮窗权限");
      }
    });
    //是否设置密码事件
    ui.Unlock.on("click", function (e) {
      if (getLockScreenInfo()) {
        // 启动密码解锁的页面
        app.startActivity({
          action: "android.app.action.SET_NEW_PASSWORD",
        });
      } else {
        app.startActivity({
          action: "android.app.action.SET_NEW_PASSWORD",
        });
      }
    });
    //当前首页页面离开之后回来的回调
    ui.emitter.on("resume", function () {
      //查询当前无障碍的是否开启
      ui.accessibility.checked = auto.service != null;
      //检查当前通知权限是否开启
      ui.notice.checked = checkNotificationAccess();
      //检查悬浮窗权限是否开启
      ui.SuspendedWindow.checked = floaty.checkPermission();
      //检查手机是否设置了密码
      ui.Unlock.checked = getLockScreenInfo() !== true;
    });

    inituserID();
    setup();
  }

  //设置机器人id
  function inituserID() {
    //如果存在userID说明已经绑定了

    if (ui.userIDtext.getText()) {
      //   //显示已经绑定
      ui.Alreadybound.visibility = 0;
      ui.unbound.visibility = 8;
      //   toast("有值");
    } else {
      ui.unbound.visibility = 0;
      ui.Alreadybound.visibility = 8;
    }
  }
  // 检查通知权限的函数
  function checkNotificationAccess() {
    // 使用 Auto.js 提供的 `context` 对象
    const notificationManager = context.getSystemService("notification");

    // 获取当前应用包名
    const packageName = context.getPackageName();

    // 检查当前应用是否具有通知监听权限
    return notificationManager.isNotificationPolicyAccessGranted();
  }
  // 获取设备锁屏信息
  function getLockScreenInfo() {
    var am = context.getSystemService(context.ACTIVITY_SERVICE);
    var keyguardManager = context.getSystemService(context.KEYGUARD_SERVICE);
    if (am && keyguardManager) {
      return keyguardManager.isKeyguardSecure();
    } else {
      return false;
    }
  }
  //设置页的方法
  function setup() {
    //查询当前无障碍的是否开启
    ui.accessibilityone.checked = auto.service != null;
    //检查当前通知权限是否开启
    ui.noticeone.checked = checkNotificationAccess();
    //检查悬浮窗权限是否开启
    ui.SuspendedWindowone.checked = floaty.checkPermission();
    //手机是否设置了密码
    ui.Unlockone.checked = getLockScreenInfo() !== true;
    ui.accessibilityone.on("check", function (checked) {
      //如果开关是true 并且没有开无障碍 则跳转去开启
      if (checked && auto.service == null) {
        app.startActivity({
          action: "android.settings.ACCESSIBILITY_SETTINGS",
        });
      }
      if (!checked && auto.service != null) {
        auto.service.disableSelf();
      }
    });

    ui.noticeone.on("click", function (checked) {
      const bool = checkNotificationAccess();
      const hasNotificationAccess = checkNotificationAccess();

      if (checked && !hasNotificationAccess) {
        app.startActivity({
          action: "android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS",
        });
      } else {
        //无法通过命令来关闭通知权限
        app.startActivity({
          action: "android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS",
        });
        toast("请在设置中关闭通知权限");
      }
    });
    ui.SuspendedWindowone.on("click", function (e) {
      if (!floaty.checkPermission() && ui.SuspendedWindow.checked) {
        // 没有悬浮窗权限，提示用户并跳转请求
        floaty.requestPermission();
      } else {
        floaty.requestPermission();
        toast("请在设置中关闭悬浮窗权限");
      }
    });

    ui.Unlockone.on("click", function (e) {
      if (getLockScreenInfo()) {
        // 启动密码解锁的页面
        app.startActivity({
          action: "android.app.action.SET_NEW_PASSWORD",
        });
      } else {
        app.startActivity({
          action: "android.app.action.SET_NEW_PASSWORD",
        });
      }
    });

    //查看日志
    ui.getconsoleinfo.on("click", function () {
      getconsole();
    });
    //控制其余的悬浮按钮显示隐藏
    //打开悬浮球
    ui.showmySwitch.on("check", function (checked) {
      console.log(checked, "checked");
      if (checked && !ui.action) {
        console.log(checked, "开启了");
        floatymodel();
      } else {
        windowfloaty.close();
        windowfloaty = "";
      }
    });
    //当前设置页面离开之后回来的回调
    ui.emitter.on("resume", function () {
      //查询当前无障碍的是否开启
      ui.accessibilityone.checked = auto.service != null;
      //检查当前通知权限是否开启
      ui.noticeone.checked = checkNotificationAccess();
      //检查悬浮窗权限是否开启
      ui.SuspendedWindowone.checked = floaty.checkPermission();
      //检查手机是否设置了密码
      ui.Unlockone.checked = getLockScreenInfo() !== true;
    });
  }
  //查看日志
  function getconsole() {
    app.startActivity("console");
  }
  var windowfloaty = "";
  // 悬浮窗球
  function floatymodel() {
    var isShowingOthers = true;
    threads.start(function () {
      windowfloaty = floaty.rawWindow(
        <vertical w="150" h="150" id="suspensiondebox" gravity="center">
          <vertical
            gravity="center"
            orientation="horizontal"
            layout_weight="1"
            layout_gravity="center_vertical"
          >
            <img
              layout_gravity="center_vertical"
              id="suspensionhome"
              w="48"
              h="48"
              src="https://ttmini.yizhiwechat.com/keTang/suspensionhome.png"
            />
          </vertical>

          <linear layout_weight="1">
            <linear layout_weight="1" gravity="center_vertical|left">
              <img
                id="suspensiondefault"
                w="48"
                h="48"
                src="https://ttmini.yizhiwechat.com/keTang/suspensiondefault.png"
              />
            </linear>
            <linear layout_weight="1" gravity="center_vertical|right">
              <img
                id="suspensiongo"
                w="48"
                h="48"
                src="https://ttmini.yizhiwechat.com/keTang/suspensiongo.png"
              />
            </linear>
          </linear>
          <img
            id="suspensionclose"
            w="48"
            h="48"
            src="https://ttmini.yizhiwechat.com/keTang/suspensionclose.png"
          />
        </vertical>
      );

      windowfloaty.suspensiongo.visibility = 8;
      windowfloaty.suspensionclose.visibility = 8;
      windowfloaty.suspensionhome.visibility = 8;
      //记录按键被按下时的触摸坐标
      var x = 0,
        y = 0;
      //记录按键被按下时的悬浮窗位置
      var windowX, windowY;
      //记录按键被按下的时间以便判断长按等动作
      var downTime;
      windowfloaty.suspensiondefault.setOnTouchListener(function (view, event) {
        switch (event.getAction()) {
          case event.ACTION_DOWN:
            x = event.getRawX();
            y = event.getRawY();
            windowX = windowfloaty.getX();
            windowY = windowfloaty.getY();
            downTime = new Date().getTime();
            return true;
          case event.ACTION_MOVE:
            //移动手指时调整悬浮窗位置
            windowfloaty.setPosition(
              windowX + (event.getRawX() - x),
              windowY + (event.getRawY() - y)
            );
            //如果按下的时间超过1.5秒判断为长按，退出脚本
            if (new Date().getTime() - downTime > 2000) {
              floatymodelclose();
            }
            return true;
          case event.ACTION_UP:
            //手指弹起时如果偏移很小则判断为点击
            // 点击 suspensiondefault 图片时切换显示/隐藏其他三个图片
            if (
              Math.abs(event.getRawY() - y) < 5 &&
              Math.abs(event.getRawX() - x) < 5
            ) {
              if (isShowingOthers) {
                windowfloaty.suspensiongo.visibility = 0;
                windowfloaty.suspensionclose.visibility = 0;
                windowfloaty.suspensionhome.visibility = 0;

                isShowingOthers = false;
              } else {
                windowfloaty.suspensiongo.visibility = 8;
                windowfloaty.suspensionclose.visibility = 8;
                windowfloaty.suspensionhome.visibility = 8;

                isShowingOthers = true;
              }
            }
            return true;
        }
        return true;
      });
      // 使用threads.start代替setInterval实现定时功能
      var interval = threads.start(function () {
        while (true) {
          // 暂停一段时间，比如1秒
          sleep(1000);
        }
      });

      // 如果你需要停止定时器，可以调用interval.stop()
      //修改开启控件的状态
      windowfloaty.suspensiongo.click(() => {
        var defaultSrc = windowfloaty.suspensiongo.attr("src");
        console.log(defaultSrc, "defaultSrc");
        if (
          defaultSrc ===
          "https://ttmini.yizhiwechat.com/keTang/suspensiongotrue.png"
        ) {
          windowfloaty.suspensiongo.attr(
            "src",
            "https://ttmini.yizhiwechat.com/keTang/suspensiongo.png"
          );
        } else {
          windowfloaty.suspensiongo.attr(
            "src",
            "https://ttmini.yizhiwechat.com/keTang/suspensiongotrue.png"
          );
        }
      });
      //关闭脚本
      windowfloaty.suspensionclose.click(() => {
        floatymodelclose();
      });
      //打开当前脚本页面
      windowfloaty.suspensionhome.click(() => {
        openCurrentScriptPage();
      });
    });
  }
  //关闭脚本、悬浮球
  function floatymodelclose() {
    windowfloaty.close();
    exit();
    toast("脚本停止运行");
  }
  // 打开当前脚本页面的函数
  function openCurrentScriptPage() {
    // 获取当前应用包名
    const packageName1 = context.getPackageName();

    // 启动当前应用 也就是脚本的主页 提供包名跳转
    app.launchPackage(packageName1);
  }
  function updateList() {
    var newItem = {
      type: "群聊公告：",
      name: "群聊1",
      value: "我是数字" + items.length,
    };
    // 更新列表数据后滚动到最新数据位置
    items.unshift(newItem);
    if (Numbertasks > 0) {
      Numbertasks--;
      ui.Numberoftasks.setText(`待执行任务（${Numbertasks}）`);
    } else {
      toast("任务处理完成"); // 显示提示消息
      ui.hscrollID.visibility = 8;
      ui.Starthostingtext.setText("开始托管");
      clearInterval(setIntervalID);
      ui.Starthostingtext.setTextColor(colors.parseColor("#0C80FF"));
      ui.retractlist.visibility = 8;
      ui.showlist.visibility = 0;
    }
    // 更新列表数据后滚动到顶部
    setTimeout(() => {
      ui.list.scrollToPosition(0);
    }, 500);
  }
  function clearlist() {
    items.splice(0, items.length);
  }

  //初始化
  init();
})();
