class TreasureMap {
    static async getInitialClue() {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve("在古老的图书馆里找到了第一个线索...");
        }, 1000);
      });
      return "在古老的图书馆里找到了第一个线索...";
    }
  
    static async decodeAncientScript(clue) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!clue) {
            reject("没有线索可以解码!");
          }
          resolve("解码成功!宝藏在一座古老的神庙中...");
        }, 1500);
      });
      return "解码成功!宝藏在一座古老的神庙中...";
    }
  
    static async searchTemple(location) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const random = Math.random();
          if (random < 0.5) {
            reject("糟糕!遇到了神庙守卫!");
          }
          resolve("找到了一个神秘的箱子...");
        }, 2000);
      });
      return "找到了一个神秘的箱子...";
    }
  
    static async openTreasureBox() {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve("恭喜!你找到了传说中的宝藏!");
        }, 1000);
      });
      return "恭喜!你找到了传说中的宝藏!";
    }
  
    // 新增有趣情节：遇到神秘陷阱
    static async encounterTrap() {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve("糟糕！遇到神秘陷阱！");
        }, 1200);
      });
      return "糟糕！遇到神秘陷阱！";
    }
  
    // 新增有趣情节：破解陷阱
    static async solveTrap() {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve("成功破解陷阱！");
        }, 1500);
      });
      return "成功破解陷阱！";
    }
  }
  
  async function findTreasureWithPromises() {
    try {
      let clue = await TreasureMap.getInitialClue();
      document.getElementById('clueBox').textContent = clue;
  
      let location = await TreasureMap.decodeAncientScript(clue);
      document.getElementById('decodeBox').textContent = location;
  
      let boxResult = await TreasureMap.searchTemple(location);
      document.getElementById('templeBox').textContent = boxResult;
  
      // 假设在找到箱子后可能遇到陷阱
      let trapEncountered = false;
      if (Math.random() < 0.4) {
        trapEncountered = true;
        let trapMessage = await TreasureMap.encounterTrap();
        document.getElementById('boxBox').textContent = trapMessage;
      }
  
      if (trapEncountered) {
        let solvedMessage = await TreasureMap.solveTrap();
        document.getElementById('boxBox').textContent += " " + solvedMessage;
      }
  
      let treasure = await TreasureMap.openTreasureBox();
      document.getElementById('treasureBox').textContent = treasure;
    } catch (error) {
      document.getElementById('treasureBox').textContent = "任务失败: " + error;
    }
  }
  
  findTreasureWithPromises();