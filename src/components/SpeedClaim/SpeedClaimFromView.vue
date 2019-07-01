<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        SPEED CLAIM #1 (description) :
        <div class="card-action">
          <div class="dropdown">
            <a href="javascript:void(0);" class="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown" aria-expanded="false">
              <i class="icon-options"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end"
              style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(17px, 21px, 0px);">
              <a class="dropdown-item" href="javascript:void(0);">
                <i class="icon-plus"></i> Clone card
              </a>
              <a class="dropdown-item" href="javascript:void(0);">
                <i class="icon-plus"></i> Add new before
              </a>
              <a class="dropdown-item" href="javascript:void(0);">
                <i class="icon-plus"></i> Add new after
              </a>
              <a class="dropdown-item" href="javascript:void(0);">
                <i class="icon-arrow-up"></i> Move top
              </a>
              <a class="dropdown-item" href="javascript:void(0);">
                <i class="icon-arrow-down"></i> Move Down
              </a>
              <a class="dropdown-item" href="javascript:void(0);">
                <i class="icon-trash"></i> Remove card
              </a>
            </div>
          </div>
        </div>
      </div>
      <table class="table">
        <tbody>
          <tr>
            <td colspan="3" align="right">Share:</td>
            <td><input type="text"></td>
          </tr>
          <tr>
            <td colspan="3" align="right">Rate, USD/day:</td>
            <td><input type="text"></td>
          </tr>
          <tr>
            <td colspan="2" class="not-bordered"></td>
            <td align="center">hrs</td>
            <td>Days</td>
          </tr>
          <tr>
            <td class="not-bordered"></td>
            <td>Time lost:</td>
            <td><input type="text"></td>
            <td><input type="text" readonly=""></td>
            <td class="debit-col"><input type="text" readonly=""></td>
            <td class="credit-col"></td>
          </tr>
          <tr>
            <td colspan="6" class="not-bordered"></td>
          </tr>
          <tr>
            <th colspan="3">ADD COMM DURING OFF-HIRE PERIODS :</th>
            <td><input type="text"></td>
            <td class="debit-col"></td>
            <td class="credit-col"><input type="text" readonly=""></td>
          </tr>
          <tr>
            <th colspan="3">BRK COMM DURING OFF-HIRE PERIODS :</th>
            <td><input type="text"></td>
            <td class="debit-col"></td>
            <td class="credit-col"><input type="text" readonly=""></td>
          </tr>
          <tr>
            <th colspan="2">C/E/V OFF-HIRE PERIOD :</th>
            <td>Rate, USD/PMPR</td>
            <td><input type="text"></td>
            <td class="debit-col"><input type="text" readonly=""></td>
            <td class="credit-col"></td>
          </tr>
          <tr>
            <td colspan="6" class="not-bordered"></td>
          </tr>
          <tr>
            <th colspan="3">BUNKERS CONSUMED DURING OFF-HIRE :</th>
            <td>Price, USD/mt</td>
          </tr>
          <tr>
            <td>IFO</td>
            <td><input type="text"></td>
            <td>MT</td>
            <td><input type="text"></td>
            <td class="debit-col"><input type="text" readonly=""></td>
            <td class="credit-col"></td>
          </tr>
          <tr>
            <td>MDO</td>
            <td><input type="text"></td>
            <td>MT</td>
            <td><input type="text"></td>
            <td class="debit-col"><input type="text" readonly=""></td>
            <td class="credit-col"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
