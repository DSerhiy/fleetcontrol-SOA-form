<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        HOLDS CLEANING :
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
            <td colspan="4">1. ILIHC (description)</td>
            <td class="debit-col"></td>
            <td class="credit-col"><input type="text" readonly=""></td>
          </tr>
          <tr>
            <td colspan="4">2. ILIHC (description)</td>
            <td class="debit-col"></td>
            <td class="credit-col"><input type="text" readonly=""></td>
          </tr>
          <tr>
            <td colspan="4">3. ILOHC</td>
            <td class="debit-col"></td>
            <td class="credit-col"><input type="text" readonly=""></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
