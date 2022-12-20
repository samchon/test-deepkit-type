import { is } from "@deepkit/type";

import { NativeAlias } from "../../structures/NativeAlias";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_NativeAlias = _test_deepkit_is(
    "NativeAlias",
    NativeAlias.generate,
    (input) => is<NativeAlias>(input),
    NativeAlias.SPOILERS,
);